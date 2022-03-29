import React from 'react';
import './App.scss';
import axios from 'axios';
import {postType, sectionType} from "./types";
import {useParams} from "react-router-dom";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Footer from "./layout/Footer/Footer";


const restUrl = "http://localhost:3030";

const verbose = true;

function conLog(...values: any) {
  if (verbose) {
    console.log(...values);
  }
}

function App() {
  const params = useParams();
  const [sections, setSections] = React.useState<sectionType[]>([]);
  const [posts, setPosts] = React.useState<postType[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);
  const [activeSectionSlug, setActiveSectionSlug] = React.useState<string>('');
  const [previousSlug, setPreviousSlug] = React.useState<string>('');
  const [nextSlug, setNextSlug] = React.useState<string>('');


  React.useEffect(() => {
    conLog('useEffect[]')
    loadSections();
  }, [])

  React.useEffect(() => {
    conLog('useEffect[params.sectionSlug]')

    if (params.sectionSlug) {
      setActiveSectionSlug(params.sectionSlug);
    }
  }, [params.sectionSlug])

  React.useEffect(() => {
    conLog('useEffect[sections, params.sectionSlug]');
    if (params.sectionSlug && sections.length > 0) {
      loadPostsForSection(params.sectionSlug);
    }
  }, [sections, params.sectionSlug])

  React.useEffect(() => {
    conLog('useEffect[posts, params.postSlug]', params);
    if (!params.postSlug) {
      setActiveIndex(0);

    }
    const index = posts.findIndex(element => element.slug === params.postSlug);
    if (index >= 0) {
      setActiveIndex(index);
    }

  }, [posts, params]);

  React.useEffect(() => {
    if (posts.length > 0 && activeIndex >= 0) {
      posts.forEach((post, index) => {
        console.log('post', post);
        console.log('posts', posts);
        console.log('activeIndex', activeIndex);
        if (post.slug === posts[activeIndex].slug) {
          const previousIndex = (index - 1 >= 0) ? index - 1 : 0;
          const nextIndex = (index + 1 < posts.length) ? index + 1 : 0;
          const nextSlug = nextIndex > 0 ? posts[nextIndex].slug : '';
          const previousSlug = index > 0 ? posts[previousIndex].slug : '';
          setPreviousSlug(previousSlug)
          setNextSlug(nextSlug)
        }
      })
    }
  }, [posts, activeIndex]);

  const loadSections = () => {
    conLog('loadSections()')
    axios.get(restUrl + '/sections/').then((response) => {
      conLog('sections loaded');
      setSections(response.data);
    });
  }

  const loadPostsForSection = (sectionSlug: string) => {
    conLog('loadPostsForSection()');
    axios.get(`${restUrl}/sections/${sectionSlug}/posts`).then((response) => {
      conLog('posts loaded');
      setPosts(response.data);
    });
  }

  if (activeIndex === -1 || posts.length === 0) {
    console.log('not rendering');
    return null;
  }

  console.log('rendering');

  return (
    <div className="App">
      <Header title={posts[activeIndex].moniker}
              activeSectionSlug={activeSectionSlug}
              sections={sections}/>
      <main>
        <Main activePost={posts[activeIndex]}
              activeSectionSlug={activeSectionSlug}
              nextSlug={nextSlug}
              previousSlug={previousSlug}/>
      </main>
      <Footer currentIndex={activeIndex}
              posts={posts}
              sectionSlug={activeSectionSlug}
              nextSlug={nextSlug}
              previousSlug={previousSlug}/>
    </div>
  );

}

export default App;