import React, {useState} from 'react';
import './App.scss';
import axios from 'axios';
import {folioType, volumeType} from "./types";
import {Link, useParams} from "react-router-dom";
import Header from "./layout/Header/Header";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import BackButton from "./layout/BackButton/BackButton";
import FullScreenButtons from "./layout/FullScreenButtons/FullScreenButtons";
import 'swiper/css/bundle';
import {useDeviceData} from 'react-device-detect';
import BadGodsSwiper from "./layout/BadGodsSwiper/BadGodsSwiper";
import {Swiper} from "swiper";
import BadSearch from "./layout/BadSearch/BadSearch";
import BadTableOfContents from "./layout/BadTableofContents/BadTableOfContents";
import Footer from "./layout/Footer/Footer";
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@emotion/react";
import {Button} from "@mui/material";
import isEmpty from "lodash/isEmpty";
import {isVacant} from './types/l-utils';

const restUrl = "https://badgods.com:3030";

const verbose = false;

function conLog(...values: any) {
  if (verbose) {
    console.log(...values);
  }
}


const theme = createTheme({
  palette: {
    secondary: {
      main: '#888',
    },
  },
});

function App() {
  const params = useParams();
  const [error, setError] = React.useState<string>('Waiting');
  const [swiper, setSwiper] = useState<Swiper>();
  const [ready, setReady] = useState<boolean>(false);
  const [volumes, setVolumes] = React.useState<volumeType[]>([]);
  const [folios, setFolios] = React.useState<folioType[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);
  const [activeVolumeSlug, setActiveVolumeSlug] = React.useState<string>(params.volumeSlug || '');


  const fullScreenHandle = useFullScreenHandle();
  const deviceData = useDeviceData('');

  React.useEffect(() => {
    conLog('useEffect[]')
    loadVolumes();
  }, [])

  React.useEffect(() => {
    if (isEmpty(activeVolumeSlug)) {
      return;
    }
    if (params.volumeSlug !== activeVolumeSlug) {
      return;
    }
    loadFoliosForVolume(activeVolumeSlug);
  }, [activeVolumeSlug]);

  // React.useEffect(() => {
  //   if (isEmpty(activeVolumeSlug)) {
  //     return;
  //   }
  //   if (params.volumeSlug !== activeVolumeSlug) {
  //     return;
  //   }
  //   loadFoliosForVolume(activeVolumeSlug);
  // }, [activeVolumeSlug, params.volumeSlug]);

  React.useEffect(() => {
    if (activeIndex === -1) {
      return;
    }

    if (activeVolumeSlug !== params.volumeSlug) {
      return;
    }

    if (isVacant(folios)) {
      return;
    }

    if (folios[activeIndex].slug !== params.folioSlug) {
      return;
    }

    if (isVacant(params.folioSlug) && activeIndex !== 0) {
      return;
    }

    setReady(true);
  }, [params.folioSlug, folios, activeIndex, activeVolumeSlug, params.volumeSlug]);

  React.useEffect(() => {

    if (isVacant(folios)) {
      return;
    }

    if (isVacant(params.folioSlug)) {
      setActiveIndex(0);
      return;
    }

    console.log('params.folioSlug', typeof params.folioSlug)
    const index = folios.findIndex(element => element.slug === params.folioSlug);

    if (index === -1) {
      setError("No Folio Called " + params.folioSlug + " in volume " + activeVolumeSlug);
    }

    if (index >= 0) {
      setActiveIndex(index);
    }

  }, [params.folioSlug, folios]);

  // React.useEffect(() => {
  //   conLog('useEffect[activeIndex, swiper]')
  //
  //   if (swiper) {
  //     swiper.slideTo(activeIndex)
  //   }
  // }, [activeIndex, swiper]);


  const loadVolumes = () => {
    conLog('loadVolumes()')
    axios.get(restUrl + '/volumes').then((response) => {
      conLog('volumes loaded');
      setVolumes(response.data);
    });
  }

  const loadFoliosForVolume = (volumeSlug: string) => {
    conLog('loadFoliosForVolume()', volumeSlug);
    axios.get(`${restUrl}/volumes/${volumeSlug}/folios`).then((response) => {
      conLog('folios loaded', response.data);
      setFolios(response.data);
    });
  }

  return (ready ?
      <ThemeProvider theme={theme}>
        <div className="App">

          <FullScreen handle={fullScreenHandle}>
            <Header title={folios[activeIndex].nomen}
                    activeVolumeSlug={activeVolumeSlug}
                    volumes={volumes}/>
            <BadGodsSwiper handleInit={setSwiper}
                           activeIndex={activeIndex}
                           activeVolumeSlug={activeVolumeSlug}
                           folios={folios}>
              <>
                <Footer currentIndex={activeIndex} folios={folios}/>
                <BackButton/>
                <BadTableOfContents folios={folios}/>
              </>
            </BadGodsSwiper>
            <BadSearch/>
            <Link to={"/view/speak-with-monsters/chimera"}>
              <Button
                style={{position: "absolute", top: "200px", left: "200px", backgroundColor: "pink", zIndex: 9999}}>Go
                To</Button>
            </Link>
            {activeVolumeSlug !== 'bandwidth-theater' && deviceData.device.model !== 'iPhone' &&
              <FullScreenButtons handle={fullScreenHandle}/>}
          </FullScreen>
        </div>

      </ThemeProvider>
      : <h1>{error}</h1>
  );

}

export default App;