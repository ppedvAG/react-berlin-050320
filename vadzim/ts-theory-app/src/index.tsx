import React from 'react';
import ReactDOM from 'react-dom';
import './app-defaults/index.css';
// import App from './app-defaults/App';
import { Provider } from 'react-redux'
// import App from './redux-sample/App';
import App from './ts-data-types/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import transportReducer from './redux-sample/TransportReducer';

ReactDOM.render(
    <App />
/*     für redux-sample wieder in Code einführen
<Provider store={createStore(transportReducer)}><App /></Provider> */

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
