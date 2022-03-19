import React from 'react';
import './_FooterNav.scss';
import PageSlider from "../PageSlider/PageSlider";

export type FooterNavProps = {
  posts: {
    moniker: string;
    slug: string;
    id: string;
  }[];
  previousPostSlug: string;
  nextPostSlug: string;
  activePostSlug: string;
  activeSectionSlug: string;
}
export default function FooterNav({
                                    posts,
                                    previousPostSlug,
                                    nextPostSlug,
                                    activePostSlug,
                                    activeSectionSlug
                                  }: FooterNavProps) {


  return (<div className={"FooterNav"}>
      <div className={"navButton navLeft"}>
        <a href={`/posts/${activeSectionSlug}/${previousPostSlug}/`}>
          <img className="nav-arrow" alt={"previous"} src={"/images/arrow-left.png"}/>
        </a>
      </div>

      <PageSlider posts={posts} activePostSlug={activePostSlug} activeSectionSlug={activeSectionSlug}/>
      <div className={"navButton navRight"}>
        <a href={`/posts/${activeSectionSlug}/${nextPostSlug}/`}>
          <img className="nav-arrow" alt={"next"} src={"/images/arrow-right.png"}/>
        </a>
      </div>
    </div>
  );
}
