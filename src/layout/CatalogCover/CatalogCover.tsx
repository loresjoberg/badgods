import React from 'react';
import './_CatalogCover.scss';
import {sectionType} from "../../types";
import {Link} from "react-router-dom";

export type CatalogCoverProps = {
  section: sectionType;
}

export default function CatalogCover({section}: CatalogCoverProps) {
  return (<div className={"CatalogCover"} data-value={section.slug}>
    <div className={"imageWrapper"}>
      <img className="coverImage" alt="sectionTitle" src={"/ui/cover-"+ section.slug +".jpg"}/>
    </div>
    <div className={"spine"}></div>
    <Link to={"/posts/" + section.slug}>
      <div className={'sectionTitle'}>{section.moniker}</div>
    </Link>
  </div>);
}
