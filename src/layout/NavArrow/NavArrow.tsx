import React from 'react';
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";

export type NavarrowProps = {
    changePage: Function;
    slug: string;
    direction: string;
}

export default function Navarrow({changePage, slug, direction}: NavarrowProps) {


    return ( <div id={direction + "Box"} className={"bigNav"} onClick={() => changePage(slug)}>
        {direction === 'previous' ?
          <ArrowCircleLeft className={"bigLeftArrow bigArrow"}/> :
          <ArrowCircleRight className={"bigRightArrow bigArrow"}/>
        }
    </div>);
}
