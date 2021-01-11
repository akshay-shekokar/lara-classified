
const setErrorAction = data => ({
    type: "SET_ERROR",
    data
});

const setCityAction = (data) => ({
    type: "SET_CITY",
    data
});

const setCategoriesAction = (data) => ({
    type: "SET_CATEGORIES",
    data
});

const setPremiumAdsAction = (data) => ({
    type: "SET_PREMIUM_ADS",
    data
});

const setLatestAdsAction = (data) => ({
    type: "SET_LATEST_ADS",
    data
});

const setAdDetailsAction = (data) => ({
    type: "SET_AD_DETAILS",
    data
});

export default {
    setErrorAction,
    setCityAction,
    setCategoriesAction,
    setPremiumAdsAction,
    setLatestAdsAction,
    setAdDetailsAction
};