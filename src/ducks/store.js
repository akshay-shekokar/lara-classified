import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import reducer from "./reducer";

const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION__"] ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] : compose;
const enhancers = composeEnhancers(applyMiddleware(ReduxThunk));

export default createStore(reducer, enhancers);
