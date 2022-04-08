import React from 'react';
import {Slider} from "@mui/material";
import './_PageSlider.scss';
import {folioType} from "../../types";
import {useSwiper} from "swiper/react";
import SliderLabel from "../SliderLabel/SliderLabel";

export type PageSliderProps = {
  pageIndex: number,
  folios: folioType[],
  max: number
}

export default function PageSlider({pageIndex, folios, max}: PageSliderProps) {
  const swiper = useSwiper();

  const [index, setIndex] = React.useState<number>(pageIndex);

  React.useEffect(() => {
    setIndex(pageIndex);
  }, [pageIndex, swiper]);

  function valuetext(value: any) {
    return `${value}`;
  }

  function handleChange(event: any, index: number | number[]) {
    if (Array.isArray(index)) {
      index = index[0];
    }
    setIndex(index);
    swiper.slideTo(index);

  }

  function handleCommit(event: any, index: number | number[]) {
    if (Array.isArray(index)) {
      index = index[0];
    }

    swiper.slideTo(index);

  }

  const getLabel = (index: number) => {
    if (folios.length > 0) {
      return folios[index].nomen;
    }
    return '';
  }

  return (
    <Slider
      components={{
        ValueLabel: SliderLabel,
      }}
      aria-label="Page"
      className={"PageSlider"}
      value={index}
      style={{color: 'black'}}
      onChange={handleChange}
      onChangeCommitted={handleCommit}
      getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      valueLabelFormat={getLabel}
      step={1}
      min={0}
      max={max}
    />
  );
}
