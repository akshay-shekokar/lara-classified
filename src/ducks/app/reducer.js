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

const setCategoriesHandler = (state, { data }) => ({
  ...state,
  categories: data
});

const setPremiumAdsHandler = (state, { data: {data, page, limit} }) => {
  const premiumAds = [...(state.premiumAds || [])];
  const index = (page * limit) - limit + 1;
  premiumAds.splice(index,limit, ...data);
  
  return {
    ...state,
    premiumAds 
  };
};

const setLatestAdsHandler = (state, { data }) =>({
  ...state,
  latestAds: data
});

const ACTION_HANDLERS = {
  SET_ERROR: setErrorHandler,
  SET_CITY: setCityHandler,
  SET_CATEGORIES: setCategoriesHandler,
  SET_PREMIUM_ADS: setPremiumAdsHandler,
  SET_LATEST_ADS: setLatestAdsHandler,
}

export default (state = INITIAL_STATE, action) => ACTION_HANDLERS[action.type] ? ACTION_HANDLERS[action.type](state, action) : state;

