import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import { Root } from './root';

// This is the main entry point for the single-spa application
const lifecycles = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    console.error(err, info, props);
    return <div>An error occurred in the @hr-forte/webapp</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
