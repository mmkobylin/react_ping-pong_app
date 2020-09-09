import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import initial from './initial';
//now when you took away one, the message will tell you what else to take 

//ALL WHAT IS LEFT HERE IS RENDER

// //dispatching the action 
//   const reducer = (state, action ) => {
//     switch (action.type) {
//                       //keep adding functions!!!
//       case "PLAYER1_SCORES": return winner(server(player1scores(state)));
//       case "PLAYER2_SCORES": return winner(server(player2scores(state)));
//       case "RESET" : return initial;
//       default: return state;
//     }
//   }
//add action and event handler; 
  // const store = createStore(
  //   reducer,
  //   initial,
  //   window.__REDUX_DEVTOOLS_EXTENSION__
  //   && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //   );


//called whenever the state changes 
  const render = () => {

let state = store.getState();

ReactDOM.render(
    <Provider store={ store }>
      <App 
        player1={ state.player1 } 
        player2={ state.player2 }
        serving={ state.serving }
        winner={ state.winner }
        difference={ state.difference }

        handlePlayer1={ () => store.dispatch( { type: "PLAYER1_SCORES" } ) } 
        handlePlayer2={ () => store.dispatch( { type: "PLAYER2_SCORES" } ) }
        handleReset={ () => store.dispatch( { type: "RESET" } ) }
      />
    </Provider>, 
  document.getElementById('root'), 
);
  }

  //we dont want it all rerendering 
   store.subscribe(render); // re-render when state changes
  render();

  // store.subscribe(() => {
  //   let state = store.getState();
  //   // console.log(state.player1, state.player2)
  // });

  // store.dispatch( { type: "PLAYER1_SCORES" })
  // store.dispatch( { type: "PLAYER2_SCORES" })
  
  //i am telling it to do that every time state changes 
  // store.subscribe(render); // re-render when state changes
  // render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
