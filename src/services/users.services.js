import {axiosServices} from "./axios.services";
import {link} from "../url/url";


export let links = {
    allUsers:()=> axiosServices.get(link.users).then(value => value.data),
    allAlboms:(id)=> axiosServices.get(`${link.users}/${id}/albums`).then(value => value.data),
    allPhotos:(id)=> axiosServices.get(`${link.albums}/${id}/photos`).then(value => value.data)
}