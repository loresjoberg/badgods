import React from 'react';
import {FullscreenExit} from "@mui/icons-material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import {FullScreenHandle} from "react-full-screen";
import './_FullScreenButtons.scss';

export type FullscreenbuttonsProps = {
  handle: FullScreenHandle
}

export default function FullScreenButtons({handle}: FullscreenbuttonsProps) {
  return (<div className={"FullScreenButtons"}>
    <div className="exit-fullScreen-button fullScreenButton" onClick={handle.exit}>
      <FullscreenExit fontSize={"large"}/>
    </div>
    <div className="enter-fullScreen-button fullScreenButton" onClick={handle.enter}>
      <FullscreenIcon className="hoverIcon" fontSize={"large"}/>
    </div>
  </div>);
}

