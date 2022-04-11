import React from 'react';
import './_FolioSlide.scss';
import {folioType} from "../../scripts/types";
import {SwiperSlide} from "swiper/react";
import Stage from "../Stage/Stage";

export type BadGodsSlideProps = {
  folio: folioType;
  activeVolumeSlug: string;
}

export default function FolioSlide({activeVolumeSlug, folio}: BadGodsSlideProps) {

  return (<SwiperSlide key={folio.slug}>
      <Stage activeFolio={folio} activeVolumeSlug={activeVolumeSlug} folios={[]}/>
  </SwiperSlide>);
}
