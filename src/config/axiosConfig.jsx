import axios from "axios";

export const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptors add token to authorization requests
API.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
    if (token) {
      config.headers["authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default API;