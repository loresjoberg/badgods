import React from 'react';
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import './_NavBox.scss'
import {useSwiper} from "swiper/react";

export type NavBoxProps = {
  direction: string;
}

export default function NavBox({direction}: NavBoxProps) {

  const swiper = useSwiper();
  return (<div className={direction + "Box NavBox"} onClick={() => {
    direction === 'previous' ? swiper.slidePrev() : swiper.slideNext();
  }}>
    {direction === 'previous' ?
      <ArrowCircleLeft className={"leftArrow NavBox hoverIcon"}/> :
      <ArrowCircleRight className={"rightArrow NavBox hoverIcon"}/>
    }
  </div>);
}
