import React from 'react';
import './_Footer.scss';
import {folioType} from "../../types";
import NavBox from "../NavBox/NavBox";
import PageSlider from "../PageSlider/PageSlider";

export type FooterProps = {
  folios: folioType[];
  previousSlug: string;
  nextSlug: string;
  currentIndex: number;
  volumeSlug: string;
}

export default function Footer({previousSlug, nextSlug, currentIndex, volumeSlug, folios}: FooterProps) {
  return (<div className={"Footer"}>
      <NavBox key={'footerPrevious' + previousSlug} toSlug={previousSlug} direction={'previous'}
              volumeSlug={volumeSlug}/>
      <PageSlider pageIndex={currentIndex} max={folios.length - 1} folios={folios}/>
      <NavBox key={'footerNext' + nextSlug} toSlug={nextSlug} direction={'next'} volumeSlug={volumeSlug}/>
    </div>
  );
}
