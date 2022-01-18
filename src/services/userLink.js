import {axiosServices} from "./axios.services";
import {links} from "../urls/urls";


export let userLink = {
    allUsers: () => axiosServices.get(links.users).then(value => value.data),
    userDetails:(id)=> axiosServices.get(`${links.users}/${id}`).then(value =>value.data)
}