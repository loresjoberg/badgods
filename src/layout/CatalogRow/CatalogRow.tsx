import React from 'react';
import CatalogButton from "../CatalogButton/CatalogButton";
import './_CatalogRow.scss';
import {sectionType} from "../../types";

export type CatalogRowProps = {
    sections: sectionType[];
    activeSectionSlug: string;
    changeSection: Function;
}

export default function CatalogRow({sections, activeSectionSlug, changeSection}: CatalogRowProps) {
    return (<div className={"CatalogRow"}>
        {sections.map(function (section) {
            const active = section.slug === activeSectionSlug;
            return <CatalogButton key={section.slug} changeSection={changeSection} section={section} active={active}/>;
        })}
    </div>);
}
