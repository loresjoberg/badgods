import React, {ReactElement} from 'react';
import './_SliderLabel.scss'
// import {useSwiper} from "swiper/react";
import {Tooltip} from "@mui/material";

export type SliderLabelProps = {
  children: ReactElement;
  value: string;
}


export default function SliderLabel({children, value}: SliderLabelProps) {


  return (
    <Tooltip enterTouchDelay={0} placement="top" className="SliderLabel" title={value}>
      {children}
    </Tooltip>
  );
}
