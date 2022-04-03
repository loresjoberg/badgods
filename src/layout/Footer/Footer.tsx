import React from 'react';
import './_Footer.scss';
import {folioType} from "../../types";
import NavBox from "../NavBox/NavBox";
import PageSlider from "../PageSlider/PageSlider";

export type FooterProps = {
  folios: folioType[];
  currentIndex: number;
}

export default function Footer({currentIndex, folios}: FooterProps) {
  return (<div className={"Footer"}>
      <NavBox key={'footerPrevious' + currentIndex}  direction={'previous'}/>
      <PageSlider pageIndex={currentIndex} max={folios.length - 1} folios={folios}/>
      <NavBox key={'footerNext' + currentIndex} direction={'next'}/>
    </div>
  );
}
