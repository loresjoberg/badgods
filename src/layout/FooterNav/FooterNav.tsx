import React from 'react';
import './_FooterNav.scss';
import {postType} from "../../types";
import {Slider} from "@mui/material";

export type FooterNavProps = {
  posts: postType[];
  postSlug: string;
  changePage: any;
}

function valuetext(value: any) {
  return `${value}`;
}

export default function FooterNav({posts, postSlug, changePage}: FooterNavProps) {

  const [previousSlug, setPreviousSlug] = React.useState<string>('');
  const [nextSlug, setNextSlug] = React.useState<string>('');

  const getLabel = (index: number) => {
    if (posts.length > 0) {
      return posts[index - 1].moniker;
    }
    return '';
  }

  React.useEffect(() => {
    if (posts.length > 0) {
      posts.forEach((post, index) => {
        if (post.slug === postSlug) {
          const previousIndex = (index - 1 >= 0) ? index - 1 : 0;
          const nextIndex = (index + 1 < posts.length) ? index + 1 : index;
          setPreviousSlug(posts[previousIndex].slug)
          setNextSlug(posts[nextIndex].slug)
        }
      })
    }
  }, [postSlug, posts]);

  console.log(posts);
  return (posts.length <= 0 ? <div></div> : <div className={"FooterNav"}>
      {/*<div className={"navButton navLeft"}>*/}
      {/*  <button onClick={() => changePage(previousSlug)}>*/}
      {/*    <img className="nav-arrow" alt={"previous"} src={"/images/arrow-left.png"}/>*/}
      {/*  </button>*/}
      {/*</div>*/}
      <Slider
        aria-label="Page"
        className={"pageSlider"}
        defaultValue={3}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        valueLabelFormat={getLabel}
        step={1}
        min={1}
        max={posts.length}
        onChangeCommitted={(event, value) => {
          if (typeof value === 'number') {
            changePage(posts[value - 1].slug)
          }
        }}
      />
      {/*<div className={"navButton navRight"}>*/}
      {/*  <button onClick={() => changePage(nextSlug)}>*/}
      {/*    <img className="nav-arrow" alt={"next"} src={"/images/arrow-right.png"}/>*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  );
}
