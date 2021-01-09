import { get } from "lodash";

export const getCitiesSelector = (state) => get(state, "app.cities", []);

export const getPremiumAdsSelector = (state) => get(state, "app.premiumAds", []);