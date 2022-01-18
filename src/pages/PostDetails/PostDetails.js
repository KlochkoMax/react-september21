import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {PostsLink} from "../../services/postsLink";

const PostDetails = () => {

    let {id} = useParams();

    let [postDetails, setPostDetails] = useState(null);

    let {state} = useLocation();

    useEffect(()=>{
        if (state) {
            setPostDetails(state)
            return
        }

        PostsLink.postDetails(id).then(value => setPostDetails(value))
    },[id])


    return (
        <div>
            {
                postDetails && (
                    <div>
                        <div>
                            <h3>Post details</h3>
                            <p>Id : {postDetails.id}</p>
                            <p>User Id : {postDetails.userId}</p>
                            <p>Title : {postDetails.title}</p>
                            <p>Body  : {postDetails.body}</p>
                            <Link to={'post_comments'}><button>Show all comments to this post</button></Link>
                        </div>

                        <div>
                            <Outlet/>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default PostDetails;