import React from 'react';
import './_Footer.scss';
import {folioType} from "../../scripts/types";
import NavBox from "../NavBox/NavBox";
import PageSlider from "../PageSlider/PageSlider";

export type FooterProps = {
  folios: folioType[];
  activeFolio: folioType;
  activeVolumeSlug: string;
}

export default function Footer({activeFolio, folios, activeVolumeSlug}: FooterProps) {

  const currentIndex = folios.findIndex(folio => folio.slug === activeFolio.slug) ?? 0;

  return (<div className={"Footer"}>
      <NavBox key={'footerPrevious' + currentIndex} direction={'previous'} activeFolio={activeFolio} folios={folios}/>
      <PageSlider pageIndex={currentIndex} max={folios.length - 1} folios={folios} volumeSlug={activeVolumeSlug}/>
      <NavBox key={'footerNext' + currentIndex} direction={'next'} activeFolio={activeFolio} folios={folios}/>
    </div>
  );
}
