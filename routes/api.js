// Flow
import axios from "axios";
//later i will think of a way to be more ||
axios.defaults.baseURL = "http://localhost:3003/api";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

const BasedUrl = "";

export const Api = (url, method = "GET", data = null, headers = {}) => {
  return axios({ method, url, data, headers });
};
