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

const setPremiumAdsHandler = (state, { data: {data, page, limit} }) => {
  const premiumAds = [...(state.premiumAds || [])];
  const index = (page * limit) - limit + 1;
  premiumAds.splice(index,limit, ...data);
  
  return {
    ...state,
    premiumAds 
  }
}

const ACTION_HANDLERS = {
  SET_ERROR: setErrorHandler,
  SET_CITY: setCityHandler,
  SET_PREMIUM_ADS: setPremiumAdsHandler
}

export default (state = INITIAL_STATE, action) => ACTION_HANDLERS[action.type] ? ACTION_HANDLERS[action.type](state, action) : state;

