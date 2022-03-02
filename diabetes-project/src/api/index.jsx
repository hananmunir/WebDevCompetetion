import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchBloodSugar = () => API.get("/tracker/bloodSugar");
export const fetchBloodPressure = () => API.get("/tracker/bloodPressure");
export const fetchWeight = () => API.get("/tracker/weight");

export const signIn = (formdata) => API.post("/users/signin", formdata);
export const signUp = (formdata) => API.post("/users/signup", formdata);
