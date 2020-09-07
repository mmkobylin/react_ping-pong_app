import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";

  const initial = {
    player1: 0,
    player2: 0,
  };

  const reducer = (state, action ) => {
    switch (action.type) {
      case "PLAYER1_SCORES": return { ...state, player1: state.player1 + 1 }
      default: return state;
    }
  }
//add action and event handler; 
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
        <App player1 = { state.player1 } player2 = { state.player2 }
        count = { state.count }
        handleIncrement = { () => store.dispatch( { type: "PLAYER1_SCORES" } ) } />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  store.subscribe(() => {
    let state = store.getState();
    console.log(state.player2)
  });

  store.dispatch( { type: "PLAYER1_SCORES" })
  store.dispatch( { type: "PLAYER1_SCORES" })

  render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
