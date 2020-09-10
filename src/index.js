import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={ store }>
      <App 
        handlePlayer1={ () => store.dispatch( { type: "PLAYER1_SCORES" } ) } 
        handlePlayer2={ () => store.dispatch( { type: "PLAYER2_SCORES" } ) }
        // handleReset={ () => store.dispatch( { type: "RESET" } ) }
      />
    </Provider>, 
  document.getElementById('root'), 
);

serviceWorker.unregister();
