import React from 'react';
import './_Footer.scss';
import {postType} from "../../types";
import NavBox from "../NavBox/NavBox";
import PageSlider from "../PageSlider/PageSlider";

export type FooterProps = {
  posts: postType[];
  previousSlug: string;
  nextSlug: string;
  currentIndex: number;
  sectionSlug: string;
}

export default function Footer({previousSlug, nextSlug, currentIndex, sectionSlug, posts}: FooterProps) {
  return (<div className={"Footer"}>
      <NavBox key={'footerPrevious' + previousSlug} toSlug={previousSlug} direction={'previous'}
              sectionSlug={sectionSlug}/>
      <PageSlider pageIndex={currentIndex} max={posts.length - 1} posts={posts}/>
      <NavBox key={'footerNext' + nextSlug} toSlug={nextSlug} direction={'next'} sectionSlug={sectionSlug}/>
    </div>
  );
}
