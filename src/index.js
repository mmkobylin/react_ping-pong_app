import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";

  const initial = {
    player1: 0,
    player2: 0,
    serving: 1,
  };  
  //helper function 
  const player1scores = (state) => {
    return {
        ...state,
        player1: state.player1 + 1
    }
  }

  const player2scores = (state) => {
    return {
        ...state,
        player2: state.player2 + 1
    }
  }


  const server = ( state, action ) => {
    return {
      ...state,
      serving: Math.floor((state.player1 + state.player2)/5) % 2 === 0 ? 1 : 2
    }
  }

  // i always want to take into functions state or action 
//they return functions



//dispatching the action 
  const reducer = (state, action ) => {
    switch (action.type) {
      case "PLAYER1_SCORES": return server(player1scores(state));
      case "PLAYER2_SCORES": return server(player2scores(state));
      case "RESET" : return initial;
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

    const win = 21; 

    const winning = (state) => state.player1 >= win || state.player2 >= win;


//called whenever the state changes 
  const render = () => {
    let state = store.getState();



    ReactDOM.render(
      <React.StrictMode>
        <App 
          player1={ state.player1 } 
          player2={ state.player2 }
          serving={ state.serving }
          handlePlayer1={ () => store.dispatch( { type: "PLAYER1_SCORES" } ) } 
          handlePlayer2={ () => store.dispatch( { type: "PLAYER2_SCORES" } ) }
          handleReset={ () => store.dispatch( { type: "RESET" } ) }
        />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  // store.subscribe(() => {
  //   let state = store.getState();
  //   // console.log(state.player1, state.player2)
  // });

  // store.dispatch( { type: "PLAYER1_SCORES" })
  // store.dispatch( { type: "PLAYER2_SCORES" })
  
  //i am telling it to do that every time state changes 
  store.subscribe(render); // re-render when state changes
  render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
