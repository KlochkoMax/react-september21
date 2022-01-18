import {axiosServices} from "./axios.services";
import {links} from "../urls/urls";


export let PostsLink = {
    allPosts:()=>axiosServices.get(links.posts).then(value => value.data),
    postDetails:(id)=>axiosServices.get(`${links.posts}/${id}`).then(value => value.data),
    allUserPosts:(id)=> axiosServices.get(`${links.users}/${id}/posts`).then (value => value.data)
}