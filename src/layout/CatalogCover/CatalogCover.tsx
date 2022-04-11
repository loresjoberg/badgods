import React from 'react';
import './_CatalogCover.scss';
import {volumeType} from "../../scripts/types";
import {Link} from "react-router-dom";

export type CatalogCoverProps = {
  volume: volumeType;
}

export default function CatalogCover({volume}: CatalogCoverProps) {
  return (<div className={"CatalogCover"} data-value={volume._id}>
    <Link to={"/view/" + volume._id}>
      <div className={"imageWrapper"}>
        <img className="coverImage" alt="volumeTitle" src={"/ui/cover-" + volume._id + ".jpg"}/>
      </div>
      <div className={"spine"}></div>
      <div className={'volumeTitle'}>{volume.nomen}</div>

    </Link>
  </div>);
}
