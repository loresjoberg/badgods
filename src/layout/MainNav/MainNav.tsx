import React from 'react';
import NavBox from "../NavBox/NavBox";
import './_MainNav.scss';

export type MainNavProps = {
  previousSlug: string;
  nextSlug: string;
  activeVolumeSlug: string;
}

export default function MainNav({previousSlug, nextSlug, activeVolumeSlug}: MainNavProps) {
  return (<div className="MainNav">
    <NavBox key={"NavBoxPrev" + previousSlug}
            direction={'previous'}
            volumeSlug={activeVolumeSlug}
            toSlug={previousSlug}/>
    <NavBox key={"NavBoxNext" + nextSlug}
            direction={'next'}
            volumeSlug={activeVolumeSlug}
            toSlug={nextSlug}/>
  </div>);
}
