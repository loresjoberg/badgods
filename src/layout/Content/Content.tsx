import React, {ReactElement} from 'react';
import {pageMe} from "../../html/pages";
import {folioType} from "../../types";
import './_Content.scss';

export type ContentProps = {
  activeVolumeSlug: string;
  activeFolio: folioType;
}

export default function Content({activeFolio, activeVolumeSlug}: ContentProps) {
  const [content, setContent] = React.useState<ReactElement>(<span></span>);

  // React.useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [content])

  React.useEffect(() => {
    // console.log('Content.useEffect', activeFolio.slug, new Date());
    if (activeFolio.mediaType === 'image') {
      const dir = activeVolumeSlug === 'apocrypha' ? `images` : `images/${activeVolumeSlug}`;
      const element = <div className={"imageWrapper"}>
        <img className="main-image" alt="" src={`/${dir}/${activeFolio.slug}.png`}/>
      </div>;
      setContent(element);
    } else if (activeFolio.mediaType === 'html') {
      const title = (activeVolumeSlug === 'book-of-ratings') ? activeFolio.nomen : '';
      setContent(pageMe(activeFolio.slug, title));
    } else if (activeFolio.mediaType === 'animation') {
      setContent(<h3>animation</h3>);
    } else if (activeFolio.mediaType === 'video') {
      const element = <div className={"videoWrapper"}>
        <video key={activeFolio.slug} className={"video"} controls preload={"metadata"}>
          <source src={`/video/${activeFolio.slug}.mp4`}
                  type="video/mp4"/>
          <a href={`/video/${activeFolio.slug}.mp4`}>Download</a>
        </video>
      </div>
      setContent(element);
    }
  }, [activeFolio.slug, activeFolio.mediaType, activeFolio.nomen, activeVolumeSlug])

  return (
    <div key={activeFolio.slug} className={"Content Content-" + activeFolio.mediaType}>
      {content}
    </div>
  );
}
