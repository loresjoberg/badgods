import React from 'react';
import './App.scss';
import axios from 'axios';
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import {postType, sectionType} from "./types";

const restUrl = "http://localhost:3030";
const baseUrl = "http://localhost:3000";
const nullPost = {
  sectionSlug: "",
  mediaType: "",
  moniker: "",
  postDate: "",
  slug: ""
};

export type AppProps = {
  postSlug: string,
  sectionSlug: string;
}

function App({postSlug, sectionSlug}: AppProps) {
  const [sections, setSections] = React.useState<sectionType[]>([]);
  const [posts, setPosts] = React.useState<postType[]>([]);
  const [activePost, setActivePost] = React.useState<postType>(nullPost);
  const [activeSectionSlug, setActiveSectionSlug] = React.useState<string>('');

  React.useEffect(() => loadSections(), []);
  React.useEffect(() => {
    if (postSlug) {
      loadActivePost(postSlug)
      return;
    }
    loadPostsForSection(sectionSlug)
  }, [postSlug, sectionSlug]);
  React.useEffect(() => {
    normalizeUrl(activePost.sectionSlug, activePost.slug)
  }, [activePost]);
  React.useEffect(() => setActiveSectionSlug(activePost.sectionSlug), [activePost]);
  React.useEffect(() => loadPostsForSection(activePost.sectionSlug), [activePost]);
  React.useEffect(() => {
    if (posts.length < 1) {
      return;
    }
    if (activePost.sectionSlug !== posts[0].sectionSlug) {
      setActivePost(posts[0])
    }

  }, [activePost.sectionSlug, posts]);

  const loadSections = () => {
    axios.get(restUrl + '/sections/').then((response) => {
      setSections(response.data);
    });
  }

  const loadActivePost = (slug: string) => {
    axios.get(`${restUrl}/posts/${slug}`).then((response) => {
      setActivePost(response.data);
    });
  }

  const loadPostsForSection = (sectionSlug: string) => {
    if (!sectionSlug) {
      return;
    }
    axios.get(`${restUrl}/sections/${sectionSlug}/posts`).then((response) => {
      setPosts(response.data);
    });
  }

  const normalizeUrl = (sectionSlug: string, postSlug: string) => {
    if (!sectionSlug) {
      return;
    }
    window.history.replaceState({}, '', `${baseUrl}/posts/${sectionSlug}/${postSlug}`);
  }

  const changeSection = (newSlug: any) => {
    loadPostsForSection(newSlug);
  }

  const changePage = (newSlug: any) => {
    loadActivePost(newSlug);
  }


  if (!activePost) {
    return null;
  }

  return (
    <div className="App">
      <Header title={activePost.moniker}/>
      <Main post={activePost}/>
      <Footer postSlug={activePost.slug}
              activeSectionSlug={activeSectionSlug}
              posts={posts}
              sections={sections}
              changePage={changePage} changeSection={changeSection}/>
    </div>
  );

}

export default App;