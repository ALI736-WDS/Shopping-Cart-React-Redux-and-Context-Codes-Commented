import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

// api.interceptors.response.use((response) => {
//   return response.data;
// });

api.interceptors.response.use(
  // (response) => console.log(response.data),
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;
