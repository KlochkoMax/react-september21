import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    let {id, title} = post

    return (
        <div>
            <Link to={id+''} state={post}>{id}. {title}</Link>
            <hr/>
        </div>
    );
};

export default Post;