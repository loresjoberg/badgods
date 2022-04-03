import React from 'react';
import NavBox from "../NavBox/NavBox";
import './_MainNav.scss';


export default function MainNav() {
  return (<div className="MainNav">
    <NavBox key={"NavBoxPrev"}
            direction={'previous'}/>
    <NavBox key={"NavBoxNext"}
            direction={'next'}/>
  </div>);
}
