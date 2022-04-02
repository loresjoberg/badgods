import React from 'react';
import './_Main.scss';
import {folioType} from "../../types";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import Content from "../Content/Content";
import BackButton from "../BackButton/BackButton";
import FullScreenButtons from "../FullScreenButtons/FullScreenButtons";
import MainNav from "../MainNav/MainNav";

export type MainProps = {
  activeVolumeSlug: string;
  previousSlug: string;
  nextSlug: string;
  activeFolio: folioType;
}


export default function Main({activeFolio, activeVolumeSlug, previousSlug, nextSlug}: MainProps) {

  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle} className={"Main"}>
      <Content activeFolio={activeFolio} activeVolumeSlug={activeVolumeSlug}/>
      <MainNav activeVolumeSlug={activeVolumeSlug} nextSlug={nextSlug} previousSlug={previousSlug} />
      <BackButton/>
      {activeVolumeSlug !== 'bandwidth-theater' &&
        <FullScreenButtons handle={handle}/>}
    </FullScreen>
  );
}
