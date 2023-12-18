import axios from "axios";
import { Server } from "socket.io";

const httpApi = axios.create({
  baseURL: "http://localhost:3340/",
  headers: {
    api_key: "jxToiuDX70va0831yICf",
  },
});

export default httpApi;
