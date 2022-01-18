import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PostsLink} from "../../services/postsLink";
import AllUserPost from "../../components/AllUserPost/AllUserPost";
import css from "./AllUserPosts.module.css"

const AllUserPosts = () => {

    let {id} = useParams();

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        PostsLink.allUserPosts(id).then(value =>setPosts([...value]))
    },[id])

    console.log(posts)
    return (
        <div>
            <h3>Posts of this user</h3>
            {
                posts && posts.map(value => <AllUserPost key={value.id} post={value}/>)

            }
        </div>
    );
};

export default AllUserPosts;