import { getAxiosInstance } from "./axios-config";

const urls = {
  appDbUrl: "http://localhost:9004/",
};

const basicInstance = getAxiosInstance({ baseUrl: urls.appDbUrl });
basicInstance.defaults.headers.post["Content-Type"] = "application/json";

export { basicInstance };
