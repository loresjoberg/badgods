import React, {ReactElement} from 'react';
import './_Main.scss';
import {pageMe} from "../../html/pages";
import {postType} from "../../types";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import {FullscreenExit} from "@mui/icons-material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export type MainProps = {
  activePost: postType
  posts: postType[]
  changePage: Function
}
export default function Main({activePost, posts, changePage}: MainProps) {
  const handle = useFullScreenHandle();

  const [previousSlug, setPreviousSlug] = React.useState<string>('');
  const [nextSlug, setNextSlug] = React.useState<string>('');

  React.useEffect(() => {
    if (posts.length > 0) {
      posts.forEach((post, index) => {
        if (post.slug === activePost.slug) {
          const previousIndex = (index - 1 >= 0) ? index - 1 : 0;
          const nextIndex = (index + 1 < posts.length) ? index + 1 : index;
          setPreviousSlug(posts[previousIndex].slug)
          setNextSlug(posts[nextIndex].slug)
        }
      })
    }
  }, [activePost.slug, posts]);

  const [content, setContent] = React.useState<ReactElement>(<span></span>);

  React.useEffect(() => {
    if (activePost.mediaType === 'image') {
      const element = <div className={"imageWrapper"}>
        <img className="main-image" alt="" src={"/images/" + activePost.slug + ".png"}/>
      </div>;
      setContent(element);
    } else if (activePost.mediaType === 'html') {
      setContent(pageMe(activePost.slug));
    } else if (activePost.mediaType === 'animation') {
      setContent(<h3>animation</h3>);
    }
  }, [activePost]);

  return (<main className={"Main"}>
    {/*<h2>{activePost.moniker}</h2>*/}
    <FullScreen handle={handle}>

      <div id={"content"}>
        {content}
      </div>
      <div id={"nextBox"} className={"bigNav"} onClick={() => changePage(nextSlug)}>
        <ArrowCircleRightIcon className={"bigRightArrow bigArrow"}/>
      </div>
      <div className="exit-fullScreen-button" onClick={handle.exit}>
        <FullscreenExit fontSize={"large"}/>
      </div>
    </FullScreen>

    <div className="fullScreen-button" onClick={handle.enter}>
      <FullscreenIcon fontSize={"large"}/>
    </div>

  </main>);
}
