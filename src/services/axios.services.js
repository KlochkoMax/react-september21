import axios from "axios";
import mainUrl from "../configs/urls";

export const axiosService = axios.create({
    baseURL:mainUrl
})