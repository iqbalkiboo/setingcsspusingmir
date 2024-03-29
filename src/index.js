import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "../src/Style/reset.css"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import "../src/Style/cafaeble.main-1.0.css"

import "../node_modules/react-leaflet"

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
