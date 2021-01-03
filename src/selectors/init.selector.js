import { get } from "lodash";

export const getCitiesSelector = (state) => get(state, "app.cities", []);