import React from 'react';
import './App.scss';
import axios from 'axios';
import {folioType, volumeType} from "./types";
import {useParams} from "react-router-dom";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";


const restUrl = "https://badgods.com:3030";

const verbose = true;


function conLog(...values: any) {
  if (verbose) {
    console.log(...values);
  }
}

function App() {
  const params = useParams();
  const [volumes, setVolumes] = React.useState<volumeType[]>([]);
  const [folios, setFolios] = React.useState<folioType[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);
  const [activeVolumeSlug, setActiveVolumeSlug] = React.useState<string>('');
  const [previousSlug, setPreviousSlug] = React.useState<string>('');
  const [nextSlug, setNextSlug] = React.useState<string>('');


  React.useEffect(() => {
    conLog('useEffect[]')
    loadVolumes();
  }, [])

  React.useEffect(() => {
    conLog('useEffect[params.volumeSlug]')

    if (params.volumeSlug) {
      setActiveVolumeSlug(params.volumeSlug);
    }
  }, [params.volumeSlug])

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
    if (folios.length > 0 && activeIndex >= 0) {
      folios.forEach((folio, index) => {
        console.log('folio', folio);
        console.log('folios', folios);
        console.log('activeIndex', activeIndex);
        if (folio.slug === folios[activeIndex].slug) {
          const previousIndex = (index - 1 >= 0) ? index - 1 : 0;
          const nextIndex = (index + 1 < folios.length) ? index + 1 : 0;
          const nextSlug = nextIndex > 0 ? folios[nextIndex].slug : '';
          const previousSlug = index > 0 ? folios[previousIndex].slug : '';
          setPreviousSlug(previousSlug)
          setNextSlug(nextSlug)
        }
      })
    }
  }, [folios, activeIndex]);



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
    console.log('not rendering');
    return null;
  }


  console.log('rendering');

  return (
    <div className="App">
      <Header title={folios[activeIndex].nomen}
              activeVolumeSlug={activeVolumeSlug}
              volumes={volumes}/>
      <main>
        <Main activeFolio={folios[activeIndex]}
              activeVolumeSlug={activeVolumeSlug}
              nextSlug={nextSlug}
              previousSlug={previousSlug}/>
      </main>
      <Footer currentIndex={activeIndex}
              folios={folios}
              volumeSlug={activeVolumeSlug}
              nextSlug={nextSlug}
              previousSlug={previousSlug}/>
    </div>
  );

}

export default App;