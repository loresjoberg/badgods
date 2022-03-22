import React from 'react';
import Main, { MainProps } from './Main';

export default {
    title: "Main",
    component: Main
};

export const Default = (props: MainProps) => <Main {...props} />;
