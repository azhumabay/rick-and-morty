import axios from "axios";
import { BASE_URL } from "../const/api";

export const HTTP_CLIENT = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

HTTP_CLIENT.interceptors.response.use((response) => response.data);
