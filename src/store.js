import './index.css';
import { createStore } from "redux";
import initial from './initial';
import reducer from './reducer';

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

export default store;