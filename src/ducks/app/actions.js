
const setErrorAction = data => ({
    type: "SET_ERROR",
    data
});

const setCityAction = (data) => ({
    type: "SET_CITY",
    data
});

const setPremiumAdsAction = (data) => ({
    type: "SET_PREMIUM_ADS",
    data
});

export default {
    setErrorAction,
    setCityAction,
    setPremiumAdsAction
};