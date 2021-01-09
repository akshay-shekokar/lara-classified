const INITIAL_STATE = {
  errors: [],
  cities: []
}

const setErrorHandler = (state, { data }) => ({
  ...state,
  errors: [
    ...(state.errors || []),
    data
  ]
});

const setCityHandler = (state, { data }) => ({
  ...state,
  cities: data
});

const ACTION_HANDLERS = {
  SET_ERROR: setErrorHandler,
  SET_CITY: setCityHandler
}

export default (state = INITIAL_STATE, action) => ACTION_HANDLERS[action.type] ? ACTION_HANDLERS[action.type](state, action) : state;

