import {axiosService} from "./axios.service";
import {urls} from "../configs/url";

export const postService = {
    getPosts:(id)=>axiosService.get(`${urls.posts}?userId=${id}`)
        .then(value => value.data)
}