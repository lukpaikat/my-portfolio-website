import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (
  localStorage.theme === 'dark'
  || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme:dark)').matches)
) {
  localStorage.setItem('theme', 'dark');
  document.documentElement.classList.add('dark');
} else {
  localStorage.setItem('theme', 'light');
  document.documentElement.classList.remove('dark');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
