import React from 'react';
import './_CatalogButton.scss';
import {sectionType} from "../../types";

export type CatalogButtonProps = {
  section: sectionType;
  active: boolean;
  changeSection: Function;
}

export default function CatalogButton({section, active, changeSection}: CatalogButtonProps) {
  const activeClass = active ? 'active' : '';
  return (

    <div onClick={() => changeSection(section.slug)} className={"CatalogButton " + activeClass}
         data-value={section.slug}>
      <div className={'sectionTitle'}>{section.moniker}</div>
    </div>
  );
}
