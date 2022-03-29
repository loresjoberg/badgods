import React, {ReactElement} from 'react';
import {pageMe} from "../../html/pages";
import {postType} from "../../types";
import './_Content.scss';

export type ContentProps = {
  activeSectionSlug: string;
  activePost: postType;
}

export default function Content({activePost, activeSectionSlug}: ContentProps) {
  const [content, setContent] = React.useState<ReactElement>(<span></span>);

  // React.useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [content])

  React.useEffect(() => {
    // console.log('Content.useEffect', activePost.slug, new Date());
    if (activePost.mediaType === 'image') {
      const dir = activeSectionSlug === 'apocrypha' ? `images` : `images/${activeSectionSlug}`;
      const element = <div className={"imageWrapper"}>
        <img className="main-image" alt="" src={`/${dir}/${activePost.slug}.png`}/>
      </div>;
      setContent(element);
    } else if (activePost.mediaType === 'html') {
      const title = (activeSectionSlug === 'book-of-ratings') ? activePost.moniker : '';
      setContent(pageMe(activePost.slug, title));
    } else if (activePost.mediaType === 'animation') {
      setContent(<h3>animation</h3>);
    } else if (activePost.mediaType === 'video') {
      const element = <div className={"videoWrapper"}>
        <video key={activePost.slug} className={"video"} controls preload={"metadata"}>
          <source src={`/video/${activePost.slug}.mp4`}
                  type="video/mp4"/>
          <a href={`/video/${activePost.slug}.mp4`}>Download</a>
        </video>
      </div>
      setContent(element);
    }
  }, [activePost.slug])

  return (
    <div key={activePost.slug} className={"Content Content-" + activePost.mediaType}>
      {content}
    </div>
  );
}
