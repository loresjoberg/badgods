import React from 'react';
import {sectionType} from "../../types";
import Header from "../Header/Header";
import CatalogCover from "../CatalogCover/CatalogCover";
import './_Bookshelf.scss';
import axios from "axios";
import {useParams} from "react-router-dom";

const restUrl = "http://localhost:3030";

export default function Bookshelf() {
  const [sections, setSections] = React.useState<sectionType[]>([]);

  React.useEffect(() => loadSections(), []);

  const loadSections = () => {
    axios.get(restUrl + '/sections/').then((response) => {
      setSections(response.data);
    });
  }

  return (<div className="Bookshelf">
    <Header title={''}
            activeSectionSlug={''}
            sections={sections}/>
    <div className={"Wall"}>
      <div className={"Shelves"}>
      {sections.map(function (section) {
        return <CatalogCover key={section.slug} section={section}/>;
      })}
      </div>
    </div>
  </div>);
}
