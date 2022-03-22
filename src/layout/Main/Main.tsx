import React, {ReactElement} from 'react';
import './_Main.scss';
import {pageMe} from "../../html/pages";
import {postType} from "../../types";

export type MainProps = {
   post: postType
}
export default function Main({post}: MainProps) {

    const [content, setContent] = React.useState<ReactElement>(<span></span>);

    React.useEffect(() => {
        if (post.mediaType === 'image') {
            const element = <img className="main-image" alt="" src={"/images/" + post.slug + ".png"}/>;
            setContent(element);
        } else if (post.mediaType === 'html') {
            setContent(pageMe(post.slug));
        } else if (post.mediaType === 'animation') {
            setContent(<h3>animation</h3>);
        }
    }, [post]);

    return (<main className={"Main"}>
        <h2>{post.moniker}</h2>
        {content}
    </main>);
}
