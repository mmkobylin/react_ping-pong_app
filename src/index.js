import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';

const render = () => {
    let state = store.getState();
 
    // pass current state as a prop into App component (example for the counter)
    ReactDOM.render(
        <Provider store={ store }>
            <App />,
        </Provider>,
        document.getElementById("root")
    );
};

store.subscribe(render); // re-render when state changes
render(); // render when page loads using initial state

serviceWorker.unregister();
