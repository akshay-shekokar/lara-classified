import { handleDispatch } from "../config/handle-dispatch";
import appAction from "../ducks/app/actions";
import { basicInstance } from "../config/config";

export const getCityService = handleDispatch(async ({ dispatch }) => {
    console.log("Akshay", basicInstance.get);
    dispatch(appAction.setCityAction([1, 2, 3, 4]));
});