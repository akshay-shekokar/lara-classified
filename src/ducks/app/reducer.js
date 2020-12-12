import { combineReducers } from "redux";

const INITIAL_STATE = {
  city: []
}

const setCityHandler = (state, { data }) => ({
  ...state,
  city: data
});

const ACTION_HANDLERS = {
  SET_CITY: setCityHandler
}

export default (state = INITIAL_STATE, action) => ACTION_HANDLERS[action.type] ? ACTION_HANDLERS[action.type](state, action) : state;

