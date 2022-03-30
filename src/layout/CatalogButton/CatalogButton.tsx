import React from 'react';
import './_CatalogButton.scss';
import {volumeType} from "../../types";
import {Link} from "react-router-dom";

export type CatalogButtonProps = {
  volume: volumeType;
  active: boolean;
}

export default function CatalogButton({volume, active}: CatalogButtonProps) {
  const activeClass = active ? 'active' : '';
  return (
    <Link to={`/view/` + volume._id + '/'} className={"CatalogButton " + activeClass}>
      <div className={'volumeTitle'}>{volume.nomen}</div>
    </Link>
  );
}
