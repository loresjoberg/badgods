import React from 'react';
import './_Header.scss';

export type HeaderProps = {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <header className="Header">
      <div className="Header-left">
        <h2 className="header-title">
          {title}
        </h2>
      </div>
      <div className="Header-center">
        <img alt={"Bad Gods"} src={"/images/bad-gods-logo.png"}/>
      </div>
      <div className="Header-right">
      </div>
    </header>
  );
}
