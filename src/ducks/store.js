import { createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

export default createStore(reducer, composeWithDevTools());
