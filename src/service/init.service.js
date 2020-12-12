import { handleDispatch } from "../config/handle-dispatch";
import appAction from "../ducks/app/actions";

export const getCityService = handleDispatch(async ({ dispatch }) => {
    dispatch(appAction.setCityAction([1, 2, 3, 4]));
});