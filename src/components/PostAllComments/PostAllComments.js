import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentslink} from "../../services/commentsLink";
import Comment from "../Comment/Comment";


const PostAllComments = () => {

    let {id} = useParams();
    console.log(id)

    let [comments, setComments] = useState([]);

    useEffect(()=>{
        commentslink.allComments(id).then(value => setComments([...value]))
    },[id])

    console.log(comments)

    return (
        <div>
            <h3>Comments</h3>
            <div>
                {
                    comments && comments.map(value => <Comment key={value.id} comment={value}/>)
                }
            </div>
        </div>
    );
};

export default PostAllComments;