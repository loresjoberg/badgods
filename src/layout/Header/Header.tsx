import React from 'react';
import './_Header.scss';

export type HeaderProps = {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <header className="Header">
      <img alt={"Bad Gods"} src={"/images/bad-gods-logo.png"}/>
    </header>
  );
}
