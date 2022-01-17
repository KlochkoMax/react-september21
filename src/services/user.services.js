import {axiosService} from "./axios.services";
import {urls} from "../configs/urls";


export const userServices = {
    getAllUsers:() =>axiosService.get(urls.users).then(value => value.data)
}