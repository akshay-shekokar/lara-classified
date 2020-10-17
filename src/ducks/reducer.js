import { combineReducers } from "redux";
import appReducer from "./app/reducer";

export default combineReducers({
    user: () => ({}),
    app: appReducer
});
