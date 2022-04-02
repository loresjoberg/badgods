import React from 'react';
import {Link} from "react-router-dom";
import './_BackButton.scss';

export default function BackButton() {
    return <Link to="/" className="BackButton">
        <img alt="to index" src={"/ui/back-arrow.png"}/>
    </Link>;
}
