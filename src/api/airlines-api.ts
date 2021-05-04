import axios from "axios";
import { buildUrl, buildHostUrl } from "./helpers";

const url = buildHostUrl("airlines");

const api = {
  getAll: async () => {
    return await axios.get(url);
  },
  get: async (airlineId: number) => {
    return await axios.get(buildUrl(url, airlineId));
  },
  put: async (airlineId: number) => {
    return await axios.put(buildUrl(url, airlineId));
  },
  post: async (airlineId: number) => {
    return await axios.post(buildUrl(url, airlineId));
  }
};

export default api;
