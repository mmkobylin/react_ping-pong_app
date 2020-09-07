import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";

  const initial = {
    player1: 0,
    player2: 3,
  };

  const reducer = (state, action ) => {
    switch (action.type) {
      default: return state;
    }
  }

  const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
//called whenever the state changes 
  const render = () => {
    let state = store.getState();

    ReactDOM.render(
      <React.StrictMode>
        <App player1 = { state.player1 } player2 = { state.player2 } />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  store.subscribe(render);
  render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
