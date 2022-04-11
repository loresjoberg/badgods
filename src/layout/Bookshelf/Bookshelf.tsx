import React from 'react';
import {volumeType} from "../../scripts/types";
import Header from "../Header/Header";
import CatalogCover from "../CatalogCover/CatalogCover";
import './_Bookshelf.scss';
import axios from "axios";
import StageScrolling from "../StageScrolling/StageScrolling";

const restUrl = "https://badgods.com:3030";

export default function Bookshelf() {
  const [volumes, setVolumes] = React.useState<volumeType[]>([]);

  React.useEffect(() => loadVolumes(), []);

  const loadVolumes = () => {
    axios.get(restUrl + '/volumes').then((response) => {
      setVolumes(response.data);
    });

  }


  return (<div className="Bookshelf">
    <Header title={''}
            activeVolumeSlug={''}
            volumes={volumes}/>
    <StageScrolling>
      <div className={"Wall"}>
        <div className={"Shelves volumes-" + volumes.length}>
          {volumes.map(function (volume) {
            return <CatalogCover key={volume._id} volume={volume}/>;
          })}
        </div>
      </div>
    </StageScrolling>
  </div>);
}
