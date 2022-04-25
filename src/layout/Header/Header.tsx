import React from 'react';
import './_Header.scss';
import {volumeType} from "../../scripts/types";
import {Link} from "react-router-dom";

export type HeaderProps = {
  title: string;
  volumes: volumeType[];
  activeVolumeSlug: string;
}

export default function Header({title, volumes, activeVolumeSlug}: HeaderProps) {

  let volumeTitle = '';
  volumes.forEach((volume) => {
    if (volume._id === activeVolumeSlug) {
      volumeTitle = volume.nomen;
    }
  })

  return (
    <header className="Header">
      <div className={"Header-left Header-cell"}>
        <Link to={"/"}>
          <img alt={"Bad Gods"} src={"/ui/bad-gods-logo.png"}/>
        </Link>

      </div>
      <div className={"Header-right Header-cell"}>
        <div className={"title"}>
          {activeVolumeSlug ? <span className={"titleSpan"}>
              <div className={"volumeTitle"}>{volumeTitle}</div>
              <div>{title}</div>
          </span>
            : <div className={"byLine"}>by Lore Sj&ouml;berg</div>
          }
        </div>
      </div>
    </header>
  )
}
