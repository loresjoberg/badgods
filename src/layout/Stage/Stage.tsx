import React, {ReactElement} from 'react';
import {pageMe} from "../../html/pages";
import {folioType} from "../../scripts/types";
import './_Stage.scss';
import StageFixed from "../StageFixed/StageFixed";
import StageScrolling from "../StageScrolling/StageScrolling";
import 'swiper/css/bundle';
import Div100vh from "react-div-100vh";

export type StageProps = {
  activeVolumeSlug: string;
  activeFolio: folioType;
}

export default function Stage({activeFolio, activeVolumeSlug}: StageProps) {
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
    <Div100vh className={"StageWrapper"}>
      {content}
    </Div100vh>
  );

}
