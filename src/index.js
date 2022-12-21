import React from "react";
import App from './components/App/App';
import ReactDOM from 'react-dom/client';
import './nullstyles.css';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <App />
);

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}