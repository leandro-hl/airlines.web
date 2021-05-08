import axios from "axios";
import { buildUrl, buildHostUrl } from "./helpers";

const getRestApi = (module: string) => {
  const url = buildHostUrl(module);
  return {
    getAll: async () => {
      return await axios.get(url);
    },
    post: async item => {
      return await axios.post(url, item);
    },
    get: async (id: number) => {
      return await axios.get(buildUrl(url, id));
    },
    put: async (id: number, item) => {
      return await axios.put(buildUrl(url, id), item);
    },
    options: async () => {
      return await axios.get(buildUrl(url, "options"));
    }
  };
};

export { getRestApi };
