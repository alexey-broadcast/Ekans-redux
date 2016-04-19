import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Counter } from 'redux/reducer';

import App from './containers/App.js';

const root = document.getElementById('app');
const store = createStore(
  Counter,
  { counter: 0 },
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>,
    root
  );
}

render();

