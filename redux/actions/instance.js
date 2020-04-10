import axios from "axios";

export const instance = axios.create({
  baseURL: "http://192.168.1.100:8000/food/",
});

export default instance;
