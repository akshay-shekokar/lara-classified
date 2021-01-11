import { handleDispatch } from "../config/handle-dispatch";
import appAction from "../ducks/app/actions";
import { basicInstance } from "../config/config";

export const getCityService = handleDispatch(async ({ dispatch }) => {
  const cities = (await basicInstance.get("cities")).data;
  dispatch(appAction.setCityAction(cities));
});

export const getCategoriesService = handleDispatch(async ({ dispatch }) => {
  const categories = (await basicInstance.get("categories")).data;
  dispatch(appAction.setCategoriesAction(categories));
});

