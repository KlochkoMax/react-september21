import {axiosServices} from "./axios.services";
import {links} from "../urls/urls";


export let commentslink = {
    allComments:(id) => axiosServices.get(`${links.posts}/${id}/comments`)
        .then(value => value.data)
}