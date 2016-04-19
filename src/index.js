import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Game, initialGame } from './redux/reducer';
import './stylesheet.scss';

import GameField from 'components/GameField';

const root = document.getElementById('app');
const store = createStore(
  Game,
  initialGame,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <GameField />
      </div>
    </Provider>,
    root
  );
}

render();

