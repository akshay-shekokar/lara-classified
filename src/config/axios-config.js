import axios from "axios";

const getAxiosInstance = ({ baseUrl, config = {} }) =>
  axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    ...config,
  });

export { getAxiosInstance };
