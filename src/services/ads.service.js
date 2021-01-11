import { handleDispatch } from "../config/handle-dispatch";
import appAction from "../ducks/app/actions";
import { basicInstance } from "../config/config";

export const postAdsService = handleDispatch(
  async (someObj, { adData, history }) => {
    const data = (
      await basicInstance.post("allAds", {
        ...adData,
        postedDate: Date.now(),
        imageUrl: "images/item.jpg",
        rating: 0,
        isPremium: true,
      })
    ).data;
    history.push(`/item-details/${data.id}`);
  }
);

export const getPremiumAdsService = handleDispatch(
  async ({ dispatch }, { page = 1, limit = 5 }) => {
    const ads = (
      await basicInstance.get(
        `allAds?isPremium=true&_page=${page}&_limit=${limit}&_sort=postedDate&_order=desc`
      )
    ).data;
    dispatch(appAction.setPremiumAdsAction(ads));
  }
);

export const getLatestAdsService = handleDispatch(
  async ({ dispatch }, { page = 1, limit = 5 }) => {
    const ads = (
      await basicInstance.get(
        `allAds?_page=${page}&_limit=${limit}&_sort=postedDate&_order=desc`
      )
    ).data;
    dispatch(appAction.setLatestAdsAction(ads));
  }
);

export const getAdDetailsService = handleDispatch(
  async ({ dispatch }, { id }) => {
    const ads = (await basicInstance.get(`allAds?id=${id}`)).data;
    dispatch(appAction.setAdDetailsAction(ads[0] || {}));
  }
);
