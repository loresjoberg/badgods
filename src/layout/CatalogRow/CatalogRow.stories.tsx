import React from 'react';
import CatalogRow, { CatalogRowProps } from './CatalogRow';

export default {
    title: "CatalogRow",
    component: CatalogRow
};

export const Default = (props: CatalogRowProps) => <CatalogRow {...props} />;
