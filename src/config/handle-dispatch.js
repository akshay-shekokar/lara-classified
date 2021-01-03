import { SEVERITY } from "../constants";
import appAction from "../ducks/app/actions";

export const handleDispatch = (logicFn) => {
    return data => {
        return async (dispatch, getState) => {
            try {
                await logicFn({ dispatch, getState }, data);
            } catch (e) {
                dispatch(appAction.setErrorAction({ message: e.message || e, severity: SEVERITY.HIGH }));
            }
        }
    }
};