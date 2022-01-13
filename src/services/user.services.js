
import {urls} from "../configs/url";

const usersAll = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

const usersPosts = () => {
    return fetch(urls.posts)
        .then(value => value.json())
}

export const userServices = {
    usersAll,
    usersPosts,
}