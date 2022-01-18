import React, {useEffect, useState} from 'react';
import {PostsLink} from "../../services/postsLink";
import Post from "../../components/Post/Post";
import css from "./AllPosts.module.css"
import {Outlet} from "react-router-dom";

const AllPostsPage = () => {

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        PostsLink.allPosts()
            .then(value => setPosts([...value]))
    })

    return (
        <div className={css.body}>
            <div className={css.postsBody}>
                <h2>Posts:</h2>
                    {
                        posts.map(post => <Post key={post.id} post={post}/> )
                    }
            </div>
            <div className={css.outletBody}><
                Outlet/>
            </div>
        </div>

    );
};

export default AllPostsPage;