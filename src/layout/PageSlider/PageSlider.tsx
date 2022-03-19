import React from 'react';
import './_PageSlider.scss';

export type PageSliderProps = {
  posts: {
    moniker: string;
    slug: string;
    id: string;
  }[];
  activePostSlug: string;
  activeSectionSlug: string;
}


export default function PageSlider({posts = [], activePostSlug = 'foo', activeSectionSlug = 'bar'}: PageSliderProps) {
  return (<div className={"PageSlider"}>
    {
      posts.map(function (post) {
        const active = post.slug === activePostSlug ? 'active' : '';
        return <a className="linkCell" href={`/posts/${activeSectionSlug}/${post.slug}/`}
                  key={post.id}>
          <div className={'linkDot ' + active}>
            <div className="toolTipText">{post.moniker}</div>
          </div>
        </a>;
      })}
  </div>);
}
