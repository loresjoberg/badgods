import React from 'react';
import './_Footer.scss';
import FooterNav from "../FooterNav/FooterNav";
import CatalogButton from "../CatalogButton/CatalogButton";

export type FooterProps = {
  posts: {
    moniker: string;
    slug: string;
    id: string;
  }[];
  sections: {
    moniker: string;
    slug: string;
    id: string;
  }[];
  activePostSlug: string;
  activeSectionSlug: string;
  nextPostSlug: string;
  previousPostSlug: string;
}

export default function Footer({
                                 posts,
                                 sections,
                                 previousPostSlug,
                                 nextPostSlug,
                                 activePostSlug,
                                 activeSectionSlug,
                               }: FooterProps) {
  return (<footer className="Footer">
      <FooterNav posts={posts} previousPostSlug={previousPostSlug} nextPostSlug={nextPostSlug}
                 activePostSlug={activePostSlug} activeSectionSlug={activeSectionSlug}/>
      <div className={"catalog-row"}>
        {sections.map(function (section) {
          return <CatalogButton section={section}/>;
        })}
      </div>
    </footer>
  );
}
