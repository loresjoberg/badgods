import React, {useEffect, useState} from 'react';
import './App.scss';
import {folioType, volumeType} from "./scripts/types";
import {Link, useNavigate, useParams} from "react-router-dom";
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

const theme = createTheme({
  palette: {
    secondary: {
      main: '#888',
    },
  },
});

const nullVolume: volumeType = {
  _id: "", nomen: "", precedence: 0
}
const nullFolio: folioType = {
  mediaType: "",
  nomen: "",
  postDate: "",
  sectionId: "",
  slug: ""
}

function App() {
  const params = useParams();
  const navigate = useNavigate();
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

  const goTo = (volumeSlug: string, folioSlug: string) => {
    navigate(`/view/${volumeSlug}/${folioSlug}`)
  }

  const linkFolio = params.folioSlug === 'chimera' ? 'asenator' : 'chimera';
  const linkVolume = params.folioSlug === 'chimera' ? 'lore-brand-comics' : 'speak-with-monsters';
  const isReady = Boolean(activeVolume._id !== '' && activeFolio.slug !== '');

  return (isReady ?
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header activeVolumeSlug={activeVolume._id} title={activeFolio.nomen} volumes={volumes}/>
          <div className={"upperLeft"}>
            <Link to={'/view/' + linkVolume + '/' + linkFolio}>Elsewhere</Link>
          </div>
          <div>
            <div className={"upperRight"} onClick={() => {
              goTo(linkVolume, linkFolio)
            }}>
              Clickwise
            </div>
          </div>
          <Stage activeFolio={activeFolio} activeVolumeSlug={activeVolume._id}/>
          <Footer activeFolio={activeFolio} folios={folios} activeVolumeSlug={activeVolume._id}/>
          <BackButton/>
          <FullScreenButtons handle={fullscreen}/>
        </div>
      </ThemeProvider> :
      <div>
        <div>Volume Slug: {params.volumeSlug ?? 'NO VOLUME SLUG'}</div>
        <div>Folio Slug: {params.folioSlug ?? 'NO FOLIO SLUG'}</div>
        <div>Active Volume: {activeVolume ? activeVolume._id : 'NO ACTIVE VOLUME'}</div>
        <div>Active Folio: {activeFolio ? activeFolio.slug : 'NO ACTIVE FOLIO'}</div>
      </div>
  );

}

export default App;