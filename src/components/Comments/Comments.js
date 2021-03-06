import React, {useEffect, useState} from "react";
import Comment from "../Comments/Comment";

const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    }, []);

    return (
        <div className={'comments'}>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export default Comments;