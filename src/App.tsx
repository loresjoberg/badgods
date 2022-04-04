import React, {useState} from 'react';
import './App.scss';
import axios from 'axios';
import {folioType, volumeType} from "./types";
import {useParams} from "react-router-dom";
import Header from "./layout/Header/Header";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import BackButton from "./layout/BackButton/BackButton";
import FullScreenButtons from "./layout/FullScreenButtons/FullScreenButtons";
import 'swiper/css/bundle';
import { useDeviceData, isIPhone13 } from 'react-device-detect';
import BadGodsSwiper from "./layout/BadGodsSwiper/BadGodsSwiper";
import {Swiper} from "swiper";

const restUrl = "https://badgods.com:3030";

const verbose = false;

function conLog(...values: any) {
  if (verbose) {
    console.log(...values);
  }
}

function App() {
  const params = useParams();
  const [swiper, setSwiper] = useState<Swiper>();

  const [volumes, setVolumes] = React.useState<volumeType[]>([]);
  const [folios, setFolios] = React.useState<folioType[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);
  const [activeVolumeSlug, setActiveVolumeSlug] = React.useState<string>('');
  const handle = useFullScreenHandle();
  const deviceData = useDeviceData('');
  React.useEffect(() => {
    conLog('useEffect[]')
    loadVolumes();
    console.log('deviceData', );
  }, [])

  React.useEffect(() => {
    conLog('useEffect[params.volumeSlug]')
    setActiveVolumeSlug(params.volumeSlug || volumes[0]._id);

  }, [params.volumeSlug, volumes])

  React.useEffect(() => {
    conLog('useEffect[volumes, params.volumeSlug]');
    if (params.volumeSlug && volumes.length > 0) {
      loadFoliosForVolume(params.volumeSlug);
    }
  }, [volumes, params.volumeSlug])

  React.useEffect(() => {
    conLog('useEffect[folios, params.folioSlug]', params);
    if (!params.folioSlug) {
      setActiveIndex(0);

    }
    const index = folios.findIndex(element => element.slug === params.folioSlug);
    if (index >= 0) {
      setActiveIndex(index);
    }

  }, [folios, params]);

  React.useEffect(() => {
    if (swiper) {
      swiper.slideTo(activeIndex)
    }
  }, [activeIndex, swiper]);


  const loadVolumes = () => {
    conLog('loadVolumes()')
    axios.get(restUrl + '/volumes').then((response) => {
      conLog('volumes loaded');
      setVolumes(response.data);
    });
  }

  const loadFoliosForVolume = (volumeSlug: string) => {
    conLog('loadFoliosForVolume()');
    axios.get(`${restUrl}/volumes/${volumeSlug}/folios`).then((response) => {
      conLog('folios loaded', response.data);
      setFolios(response.data);
    });
  }

  if (activeIndex === -1 || folios.length === 0) {
    conLog('not rendering');
    return null;
  }


  return (
    <div className="App">

      <FullScreen handle={handle}>
        <Header title={folios[activeIndex].nomen}
                activeVolumeSlug={activeVolumeSlug}
                volumes={volumes}/>
        <BadGodsSwiper handleInit={setSwiper} activeIndex={activeIndex} activeVolumeSlug={activeVolumeSlug} folios={folios}/>
        {activeVolumeSlug !== 'bandwidth-theater' && deviceData.device.model !== 'iPhone' &&
          <FullScreenButtons handle={handle}/>}
        <BackButton/>
      </FullScreen>
    </div>
  );

}

export default App;