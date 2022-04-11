import React from 'react';
import NavBox from "../NavBox/NavBox";
import './_MainNav.scss';


export default function MainNav() {
  return (<div className="MainNav">
    <NavBox key={"NavBoxPrev"}
            direction={'previous'} link={''}/>
    <NavBox key={"NavBoxNext"}
            direction={'next'} link={''}/>
  </div>);
}
