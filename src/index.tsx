import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import { rootReducer } from './store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import thunk from 'react-thunk';

const myStore = createStore(rootReducer);

ReactDOM.render(
  <Provider store={myStore}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
