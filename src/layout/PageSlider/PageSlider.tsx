import React from 'react';
import {Slider} from "@mui/material";
import './_PageSlider.scss';
import {useNavigate, useParams} from "react-router-dom";
import {folioType} from "../../types";

export type PageSliderProps = {
  pageIndex: number,
  folios: folioType[],
  max: number
}

export default function PageSlider({pageIndex, folios, max}: PageSliderProps) {

  const [index, setIndex] = React.useState<number>(pageIndex);

  let navigate = useNavigate();
  let params = useParams();

  React.useEffect(() => {
    setIndex(pageIndex);
  }, [pageIndex]);

  function valuetext(value: any) {
    return `${value}`;
  }

  function handleChange(event: any, index: number | number[]) {
    if (Array.isArray(index)) {
      index = index[0];
    }
    setIndex(index);

  }

  function handleCommit(event: any, index: number | number[]) {
    if (Array.isArray(index)) {
      index = index[0];
    }

    const label = getSlug(index);
    navigate('/view/' + params.volumeSlug + '/' + label)

  }

  const getSlug = (index: number) => {
    if (folios.length > 0) {
      return folios[index].slug;
    }
    return '';
  }

  const getLabel = (index: number) => {
    if (folios.length > 0) {
      return folios[index].nomen;
    }
    return '';
  }

  return (
    <Slider
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
