import React from 'react';
import {Slider} from "@mui/material";
import './_PageSlider.scss';
import {folioType} from "../../scripts/types";
import SliderLabel from "../SliderLabel/SliderLabel";
import {useNavigate} from "react-router-dom";

export type PageSliderProps = {
  pageIndex: number,
  volumeSlug: string,
  folios: folioType[],
  max: number
}

export default function PageSlider({pageIndex, folios, max, volumeSlug}: PageSliderProps) {

  const navigate = useNavigate();
  const [index, setIndex] = React.useState<number>(pageIndex);

  React.useEffect(() => {
    setIndex(pageIndex);
  }, [pageIndex]);

  function valuetext(value: any) {
    return `${value}`;
  }

  function handleChange(event: any, index: number | number[]) {
    if (Array.isArray(index)) {
      return;
    }
    const newFolio = folios[index];
    navigate('/view/' + volumeSlug + '/' + newFolio.slug)

  }

  function handleCommit(event: any, index: number | number[]) {
    return;
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
