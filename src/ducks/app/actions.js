
const setErrorAction = data => ({
    type: "SET_ERROR",
    data
});

const setCityAction = (data) => ({
    type: "SET_CITY",
    data
});

export default {
    setErrorAction,
    setCityAction
};