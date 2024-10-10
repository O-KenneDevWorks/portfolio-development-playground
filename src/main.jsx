import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'

const rootElement = document.getElementById('root');

// Make sure React is rendering into the correct element
console.log('Root element:', rootElement); // Log the root element to confirm it's being found

ReactDOM.createRoot(rootElement).render(<App />);
