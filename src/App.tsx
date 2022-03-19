import React from 'react';
import './App.scss';
import axios from 'axios';
import {pageMe} from "./html/pages";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

const baseUrl = "http://localhost:3030";


function App() {
  const [sections, setSections] = React.useState<any[]>([]);
  const [posts, setPosts] = React.useState<any[]>([]);
  const [activePost, setActivePost] = React.useState<any>([]);
  const [mainBlock, setMainBlock] = React.useState<any>(null);
  const [previousPostSlug, setPreviousPostSlug] = React.useState<string>('');
  const [nextPostSlug, setNextPostSlug] = React.useState<string>('');

  const pathName = window.location.pathname;
  const segments = pathName.split('/');
  const sectionSlug = segments[2] ?? 'speakwithmonsters';
  const postSlug = segments[3];

  React.useEffect(() => {
    axios.get(baseUrl + '/sections/').then((response) => {
      setSections(response.data);
    });
    axios.get(`${baseUrl}/sections/${sectionSlug}/posts/`).then((response) => {
      setPosts(response.data);
    });
  }, [sectionSlug]);

  React.useEffect(() => {
    if (posts.length > 0) {
      setActivePost(posts[0]);
      posts.forEach((post, index) => {
        if (post.slug === postSlug) {
          setPreviousPostSlug(posts[index - 1].slug)
          setNextPostSlug(posts[index + 1].slug)
          setActivePost(post);
        }
      })
    }
    if (activePost.media_type === 'image') {
      const element = <img className="main-image" alt="" src={"/images/" + activePost.slug + ".png"}/>;
      setMainBlock(element);
    } else if (activePost.media_type === 'html') {
      setMainBlock(pageMe(activePost.slug));
    } else if (activePost.media_type === 'animation') {
      setMainBlock(<h3>animation</h3>);
    }
  }, [activePost.media_type, activePost.slug, postSlug, posts]);

  if (!posts) return null;


  return (
    <div className="App">
      <Header title={activePost.moniker}/>
      <main className={"section-" + sectionSlug}>
        <h2>{activePost.moniker}</h2>
        {mainBlock}
      </main>
      <Footer activePostSlug={postSlug} previousPostSlug={previousPostSlug} nextPostSlug={nextPostSlug} activeSectionSlug={sectionSlug} posts={posts} sections={sections}/>
    </div>
  );

}

export default App;