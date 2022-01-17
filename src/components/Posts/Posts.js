import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import Post from "./Post";
import css from './Posts.module.css'

const Posts = ({id}) => {

    let [posts, setPosts] = useState([]);


    useEffect(()=>{
        postService.getPosts(id)
            .then(value => setPosts(value))
    },[id])



    return (
        <div className={css.posts}>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export default Posts;