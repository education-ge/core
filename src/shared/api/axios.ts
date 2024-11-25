import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:3000";

export const axiosInstance = axios.create({
  baseURL: apiUrl,
});
