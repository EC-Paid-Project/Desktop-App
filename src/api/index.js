import axios from "axios";
export const baseURL = "https://631e-111-92-143-48.ngrok-free.app/";
const API = axios.create({ baseURL: baseURL });
// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("authToken")) {
//     req.headers.Authorization = `Token ${JSON.parse(
//       localStorage.getItem("authToken")
//     )}`;
//   }

//   return req;
// });

export const postAppointment = async (formdata) => await API.post(`appointment/`,formdata);
export const getAppointment = async (formdata) => await API.get(`appointment/`,formdata);
export const postGasDetails = async (formdata) => await API.post("gasdetails/",formdata);