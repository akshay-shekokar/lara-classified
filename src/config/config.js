import { getAxiosInstance } from "./axios-config";

const urls = {
  appDbUrl: "http://localhost:9004/",
};

export const basicInstance = getAxiosInstance({ baseUrl: urls.appDbUrl });
