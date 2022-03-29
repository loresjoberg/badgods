import React from 'react';
import './_CatalogButton.scss';
import {sectionType} from "../../types";
import {Link} from "react-router-dom";

export type CatalogButtonProps = {
  section: sectionType;
  active: boolean;
}

export default function CatalogButton({section, active}: CatalogButtonProps) {
  const activeClass = active ? 'active' : '';
  return (
    <Link to={`/posts/` + section.slug + '/'} className={"CatalogButton " + activeClass}>
      <div className={'sectionTitle'}>{section.moniker}</div>
    </Link>
  );
}
