import axios from "axios";
import { buildUrl, buildHostUrl } from "./helpers";

const url = buildHostUrl("airlines");

const api = {
  getAll: async () => {
    return await axios.get(url);
  },
  post: async airline => {
    return await axios.post(url, airline);
  },
  get: async (airlineId: number) => {
    return await axios.get(buildUrl(url, airlineId));
  },
  put: async (airlineId: number, airline) => {
    return await axios.put(buildUrl(url, airlineId), airline);
  }
};

export default api;
