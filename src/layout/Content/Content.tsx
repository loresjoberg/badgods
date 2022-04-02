import React, {ReactElement} from 'react';
import {pageMe} from "../../html/pages";
import {folioType} from "../../types";
import './_Content.scss';
import StageFixed from "../StageFixed/StageFixed";
import StageScrolling from "../StageScrolling/StageScrolling";

export type ContentProps = {
  activeVolumeSlug: string;
  activeFolio: folioType;
}

export default function Content({activeFolio, activeVolumeSlug}: ContentProps) {
  const [content, setContent] = React.useState<ReactElement>(<span></span>);

  React.useEffect(() => {
    if (activeFolio.mediaType === 'image') {
      setContent(<StageFixed>
        <img alt="" src={`/images/${activeVolumeSlug}/${activeFolio.slug}.png`}/>
      </StageFixed>);
    } else if (activeFolio.mediaType === 'html') {
      const title = (activeVolumeSlug === 'book-of-ratings') ? activeFolio.nomen : '';
      setContent(<StageScrolling>
        {pageMe(activeFolio.slug, title)}
      </StageScrolling>);
    } else if (activeFolio.mediaType === 'video') {
      setContent(<StageFixed>
        <video key={activeFolio.slug} className={"video"} controls preload={"metadata"}>
          <source src={`/video/${activeFolio.slug}.mp4`} type="video/mp4"/>
        </video>
      </StageFixed>);
    }
  }, [activeFolio.slug, activeFolio.mediaType, activeFolio.nomen, activeVolumeSlug])

  return (
    <div key={activeFolio.slug} className={"Content"}>
      {content}
    </div>
  );
}
