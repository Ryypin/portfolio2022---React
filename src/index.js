import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Font.css';
import reportWebVitals from './reportWebVitals';
/*import App from './components/App.js'; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './pages/Projects';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="Projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
