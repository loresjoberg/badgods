import React from 'react';
import './_FooterNav.scss';
import PageSlider from "../PageSlider/PageSlider";
import {postType} from "../../types";

export type FooterNavProps = {
  posts: postType[];
  postSlug: string;
  changePage: any;
}
export default function FooterNav({posts, postSlug, changePage}: FooterNavProps) {

  const [previousSlug, setPreviousSlug] = React.useState<string>('');
  const [nextSlug, setNextSlug] = React.useState<string>('');

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

  return (<div className={"FooterNav"}>
      <div className={"navButton navLeft"}>
        <button onClick={() => changePage(previousSlug)}>
          <img className="nav-arrow" alt={"previous"} src={"/images/arrow-left.png"}/>
        </button>
      </div>
      <PageSlider changePage={changePage} posts={posts} activePostSlug={postSlug}/>
      <div className={"navButton navRight"}>
        <button onClick={() => changePage(nextSlug)}>
          <img className="nav-arrow" alt={"next"} src={"/images/arrow-right.png"}/>
        </button>
      </div>
    </div>
  );
}
