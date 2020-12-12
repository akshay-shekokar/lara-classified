export const handleDispatch = (logicFn) => {
    return data => {
        return async (dispatch, getState) => {
            return await logicFn({dispatch, getState}, data);
        }
    }
};