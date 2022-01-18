import axios from "axios";
import mainUrl from "../urls/urls";

export const axiosServices = axios.create({
    baseURL:mainUrl
})