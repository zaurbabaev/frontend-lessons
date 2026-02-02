import axios from "axios";

const api = axios.create({
  baseURL: "https://starex-bookapi.vercel.app",
});

export default api;
