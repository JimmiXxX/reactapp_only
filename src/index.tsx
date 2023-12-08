import * as React from 'react';
import * as ReactDOM from 'react-dom';
// @ts-ignore
import App from './App.tsx';

import './styles/reset.css'
import './styles/global.css'

// @ts-ignore
const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (
    <App/>
);