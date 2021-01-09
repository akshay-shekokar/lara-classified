import { handleDispatch } from "../config/handle-dispatch";
import appAction from "../ducks/app/actions";
import { basicInstance } from "../config/config";

export const getCityService = handleDispatch(async ({ dispatch }) => {
  const cities = (await basicInstance.get("cities")).data;
  dispatch(appAction.setCityAction(cities));
});

export const getPremiumAdsService = handleDispatch(
  async ({ dispatch }, { page = 1, limit = 5 }) => {
    const ads = (
      await basicInstance.get(`premiumAds?_page=${page}&_limit=${limit}`)
    ).data;
    dispatch(appAction.setPremiumAdsAction({ data: ads, page, limit }));
  }
);
