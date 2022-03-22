import React from 'react';
import './_PageSlider.scss';
import {postType} from "../../types";

export type PageSliderProps = {
  posts: postType[];
  activePostSlug: string;
  changePage: any
}

export default function PageSlider({posts = [], activePostSlug, changePage }: PageSliderProps) {
  return (<div className={"PageSlider"}>
    {
      posts.map(function (post) {
        const active = post.slug === activePostSlug ? 'active' : '';
        return <div className="linkCell" onClick={() => changePage(post.slug)} key={post.slug}>
          <div className={'linkDot ' + active}>
            <div className="toolTipText">{post.moniker} </div>
          </div>
        </div>;
      })}
  </div>);
}
