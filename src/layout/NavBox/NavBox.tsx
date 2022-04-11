import React from 'react';
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import './_NavBox.scss'
import {Link} from "react-router-dom";

export type NavBoxProps = {
  direction: string;
  link: string;
}

export default function NavBox({direction, link}: NavBoxProps) {

  return (<div className={direction + "Box NavBox"}>
    <Link to={link}>
      {direction === 'previous' ?
        <ArrowCircleLeft className={"leftArrow NavBox hoverIcon"}/> :
        <ArrowCircleRight className={"rightArrow NavBox hoverIcon"}/>
      }
    </Link>
  </div>);
}
