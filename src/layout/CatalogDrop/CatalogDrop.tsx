import React from 'react';
import {sectionType} from "../../types";
import './_CatalogDrop.scss';
import CatalogButton from "../CatalogButton/CatalogButton";

export type CatalogDropProps = {
    sections: sectionType[];
    activeSectionSlug: string;
}

export default function CatalogDrop({sections, activeSectionSlug}: CatalogDropProps) {
    return (<div className="CatalogDrop">
        <div className={"catalogHeader"}>Works</div>
        {sections.map(function (section) {
            const active = section.slug === activeSectionSlug;
            return <CatalogButton key={section.slug} section={section} active={active}/>;
        })}
    </div>);
}
