import {axiosService} from "./axios.service";
import {urls} from "../configs/url";


export const userServices = {
        getAll:() => axiosService.get(urls.users)
            .then (value => value.data)
}