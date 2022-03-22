import React from 'react';
import './_Footer.scss';
import FooterNav from "../FooterNav/FooterNav";
import CatalogRow from "../CatalogRow/CatalogRow";
import {postType, sectionType} from "../../types";

export type FooterProps = {
  posts: postType[];
  sections: sectionType[];
  postSlug: string;
  activeSectionSlug: string;
  changePage: Function;
  changeSection: Function;
}

export default function Footer({
                                 posts,
                                 sections,
                                 postSlug,
                                 activeSectionSlug,
                                 changePage,
                                 changeSection
                               }: FooterProps) {
  return (<footer className="Footer">
      <FooterNav posts={posts} postSlug={postSlug} changePage={changePage}/>
      <CatalogRow changeSection={changeSection} sections={sections} activeSectionSlug={activeSectionSlug}/>
    </footer>
  );
}
