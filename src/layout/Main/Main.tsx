import React from 'react';
import './_Main.scss';
import {postType} from "../../types";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import {FullscreenExit} from "@mui/icons-material";
import NavBox from "../NavBox/NavBox";
import Content from "../Content/Content";
import {Link} from "react-router-dom";

export type MainProps = {
  activeSectionSlug: string;
  previousSlug: string;
  nextSlug: string;
  activePost: postType;
}

export default function Main({activePost, activeSectionSlug, previousSlug, nextSlug}: MainProps) {

  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle} className={"Main"}>
      <NavBox key={"NavBoxPrev" + previousSlug} direction={'previous'} sectionSlug={activeSectionSlug} toSlug={previousSlug}/>
      <Content activePost={activePost} activeSectionSlug={activeSectionSlug}/>
      <NavBox key={"NavBoxNext" + nextSlug} direction={'next'} sectionSlug={activeSectionSlug} toSlug={nextSlug}/>
      <Link to="/" className="backButton">
        <img alt="to index" src={"/ui/back-arrow.png"}/>
      </Link>
      <div className="exit-fullScreen-button fullScreenButton" onClick={handle.exit}>
        <FullscreenExit fontSize={"large"}/>
      </div>
      <div className="enter-fullScreen-button fullScreenButton" onClick={handle.enter}>
        <FullscreenIcon className="hoverIcon" fontSize={"large"}/>
      </div>
    </FullScreen>
  );
}
