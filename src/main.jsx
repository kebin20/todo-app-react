import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { ThemeContextProvider } from './themeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>
);
