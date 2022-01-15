import axios from "axios";
import mainUrl from "../configs/url";


export const axiosService = axios.create({
    baseURL:mainUrl
});