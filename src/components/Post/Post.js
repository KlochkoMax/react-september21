import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Post.module.css"

const Post = ({post}) => {

    let {id, title} = post

    return (
        <div className={css.user}>
            <NavLink to={id+''} state={post}><p>{id}. {title}</p></NavLink>
            <hr/>
        </div>
    );
};

export default Post;