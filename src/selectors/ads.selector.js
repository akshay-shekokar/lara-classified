import { get } from "lodash";

export const getPremiumAdsSelector = (state) =>
  get(state, "app.premiumAds", []);

export const getLatestAdsSelector = (state) => get(state, "app.latestAds", []);

export const getAdDetailsSelector = (state) => get(state, "app.adDetails");
