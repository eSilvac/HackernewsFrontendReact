import axios from "axios";

const token = localStorage.getItem('authenticationToken');
const Api = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "authorization": token ? token : ""
  }
});

export default Api;
