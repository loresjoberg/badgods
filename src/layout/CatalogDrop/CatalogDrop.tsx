import React from 'react';
import {volumeType} from "../../types";
import './_CatalogDrop.scss';
import CatalogButton from "../CatalogButton/CatalogButton";

export type CatalogDropProps = {
    volumes: volumeType[];
    activeVolumeSlug: string;
}

export default function CatalogDrop({volumes, activeVolumeSlug}: CatalogDropProps) {
    return (<div className="CatalogDrop">
        <div className={"catalogHeader"}>Works</div>
        {volumes.map(function (volume) {
            const active = volume._id === activeVolumeSlug;
            return <CatalogButton key={volume._id} volume={volume} active={active}/>;
        })}
    </div>);
}
