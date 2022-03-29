import React from 'react';
import './_Header.scss';
import {sectionType} from "../../types";

export type HeaderProps = {
  title: string;
  sections: sectionType[];
  activeSectionSlug: string;
}

export default function Header({title, sections, activeSectionSlug}: HeaderProps) {

  let sectionTitle = '';
  sections.forEach((section) => {
    if (section.slug === activeSectionSlug) {
      sectionTitle = section.moniker;
    }
  })

  return (
    <header className="Header">
      <div className={"Header-left Header-cell"} >
        <img alt={"Bad Gods"} src={"/ui/bad-gods-logo.png"}/>
      </div>
      <div className={"Header-right Header-cell"}>
        <div className={"title"}>
          <span className={"titleSpan"}>{sectionTitle}: {title}</span>
        </div>
      </div>
    </header>
  );
}
