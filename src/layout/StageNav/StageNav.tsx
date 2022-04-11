import React from 'react';
import NavBox from "../NavBox/NavBox";
import './_StageNav.scss';
import {folioType} from "../../scripts/types";

export type StageNavProps = {
  folios: folioType[];
  activeFolio: folioType;
}

export default function StageNav({folios, activeFolio}: StageNavProps) {
  return (<div className="StageNav">
    <NavBox key={"StageNavBoxPrev"} direction={'previous'} activeFolio={activeFolio} folios={folios}/>
    <NavBox key={"StageNavBoxNext"} direction={'next'} activeFolio={activeFolio} folios={folios}/>
  </div>);
}