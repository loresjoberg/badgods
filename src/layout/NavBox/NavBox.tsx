import React from 'react';
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import './_NavBox.scss'
import {Link} from "react-router-dom";

export type NavBoxProps = {
  toSlug: string;
  direction: string;
  sectionSlug: string;
}

export default function NavBox({toSlug, sectionSlug, direction}: NavBoxProps) {

  const destination = toSlug !== '' ? '/posts/' + sectionSlug + '/' + toSlug : '/';
  return (<div className={direction + "Box NavBox"} >
    <Link to={destination}>
      {direction === 'previous' ?
        <ArrowCircleLeft className={"leftArrow NavBox hoverIcon"}/> :
        <ArrowCircleRight className={"rightArrow NavBox hoverIcon"}/>
      }
    </Link>
  </div>);
}
