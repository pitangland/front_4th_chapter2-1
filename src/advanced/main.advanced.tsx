import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './src/App';

const container = document.getElementById('app');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
} else {
  console.error("Target container 'app' not found in the DOM.");
}
