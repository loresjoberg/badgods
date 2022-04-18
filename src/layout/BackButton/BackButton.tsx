import React from 'react';
import {Link} from "react-router-dom";
import './_BackButton.scss';

export default function BackButton() {
  return <div className={"hoverable"}>
    <Link to="/" className="BackButton uiOverlay">
      <img className="hoverIcon" alt="to index" src={"/ui/back-arrow.png"}/>
    </Link>;
  </div>
}
