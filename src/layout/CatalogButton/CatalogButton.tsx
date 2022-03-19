import React from 'react';
import './_CatalogButton.scss';

export type CatalogButtonProps = {
  section: {
    moniker: string;
    slug: string;
    id: string;
  };
}

export default function CatalogButton({section}: CatalogButtonProps) {
  return (
    <a href={"/sections/" + section.slug} key={section.id} type={"button"} className={'CatalogButton'}
       data-value={section.slug}>
      <div className={'section-name'}>{section.moniker}</div>
    </a>
  );
}
