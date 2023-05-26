import axios from "axios";
import Cookies from "js-cookie";

const apiUrl = process.env.PUBLIC_NEXT_API_KEY;

const httpClient = axios.create({
  baseURL: "http://localhost:8000/api",
});

httpClient.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});


export default httpClient;