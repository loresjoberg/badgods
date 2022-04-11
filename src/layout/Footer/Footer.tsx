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

  const getPreviousLink = () => {
    const previousIndex = Math.max(currentIndex - 1, 0);
    return getlink(previousIndex);
  }

  const getNextLink = () => {
    const nextIndex = Math.min(currentIndex + 1, folios.length - 1);
    return getlink(nextIndex);
  }

  const getlink  = (folioIndex: number) => {
    return '/view/' + activeVolumeSlug + '/' + folios[folioIndex].slug;
  }

  return (<div className={"Footer"}>
      <NavBox key={'footerPrevious' + currentIndex} direction={'previous'} link={getPreviousLink()}/>
      <PageSlider pageIndex={currentIndex} max={folios.length - 1} folios={folios} volumeSlug={activeVolumeSlug}/>
      <NavBox key={'footerNext' + currentIndex} direction={'next'} link={getNextLink()}/>
    </div>
  );
}
