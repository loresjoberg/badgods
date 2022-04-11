import React, {useEffect, useState} from 'react';
import './App.scss';
import {folioType, volumeType} from "./scripts/types";
import {useParams} from "react-router-dom";
import 'swiper/css/bundle';
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@emotion/react";
import {loadFoliosForVolume, loadVolumes} from "./scripts/client";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Stage from "./layout/Stage/Stage";
import BackButton from "./layout/BackButton/BackButton";
import FullScreenButtons from "./layout/FullScreenButtons/FullScreenButtons";
import {useFullScreenHandle} from "react-full-screen";
import BadSearch from "./layout/BadSearch/BadSearch";
import BadTableOfContents from "./layout/BadTableofContents/BadTableOfContents";
import {useFlipTo} from "./scripts/hooks";

const theme = createTheme({
  palette: {
    secondary: {
      main: '#888',
    },
  },
});

const nullVolume: volumeType = {
  _id: "",
  nomen: "",
  precedence: 0
}
const nullFolio: folioType = {
  mediaType: "",
  nomen: "",
  postDate: "",
  volume: "",
  slug: ""
}

function App() {
  const params = useParams();
  const fullscreen = useFullScreenHandle();
  const [volumes, setVolumes] = useState<volumeType[]>([]);
  const [activeVolume, setActiveVolume] = useState<volumeType>(nullVolume);
  const [folios, setFolios] = useState<folioType[]>([])
  const [activeFolio, setActiveFolio] = useState<folioType>(nullFolio)

  useEffect(() => loadVolumes(setVolumes), [])

  useEffect(() => {
    setActiveVolume(volumes.find(volume => volume._id === params.volumeSlug) ?? nullVolume);
  }, [params.volumeSlug, volumes])

  useEffect(() => {
    activeVolume._id && loadFoliosForVolume(activeVolume._id, setFolios);
  }, [activeVolume])

  useEffect(() => {
    if (!params.hasOwnProperty('folioSlug')) {
      setActiveFolio(folios[0] ?? nullFolio);
      return;
    }

    setActiveFolio(folios.find(folio => folio.slug === params.folioSlug) ?? nullFolio);
  }, [folios, params])

  const isReady = Boolean(activeVolume._id !== '' && activeFolio.slug !== '');


  return (isReady ?
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header activeVolumeSlug={activeVolume._id} title={activeFolio.nomen} volumes={volumes}/>
          <Stage activeFolio={activeFolio} activeVolumeSlug={activeVolume._id}/>
          <Footer activeFolio={activeFolio} folios={folios} activeVolumeSlug={activeVolume._id}/>
          <BadSearch/>
          <BadTableOfContents folios={folios}/>
          <BackButton/>
          <FullScreenButtons handle={fullscreen}/>
        </div>
      </ThemeProvider>
      : <h1>Loading...</h1>
  );

}

export default App;