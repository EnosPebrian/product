import axios from "axios";

const api = axios.create({
  baseURL: "https://product-api.crystalux.web.id",
});

export default api;
