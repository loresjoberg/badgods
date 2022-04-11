import React from 'react';
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import './_NavBox.scss'
import {Link} from "react-router-dom";
import {folioType} from "../../scripts/types";

export type NavBoxProps = {
  direction: string;
  folios: folioType[];
  activeFolio: folioType;
}

export default function NavBox({direction, folios, activeFolio}: NavBoxProps) {

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
    return '/view/' + folios[folioIndex].volume + '/' + folios[folioIndex].slug;
  }

  return (<div className={direction + "Box NavBox"}>
    <Link to={direction === 'previous' ? getPreviousLink() : getNextLink()}>
      {direction === 'previous' ?
        <ArrowCircleLeft className={"leftArrow hoverIcon"}/> :
        <ArrowCircleRight className={"rightArrow hoverIcon"}/>
      }
    </Link>
  </div>);
}
