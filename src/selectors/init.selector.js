import { get } from "lodash";

export const getCitiesSelector = (state) => get(state, "app.cities", []);

export const getCategoriesSelector = (state) => get(state, "app.categories", []);

export const getPremiumAdsSelector = (state) => get(state, "app.premiumAds", []);

export const getLatestAdsSelector = (state) => get(state, "app.latestAds", []);