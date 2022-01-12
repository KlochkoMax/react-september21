import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <p><b>name</b> : {comment.name}</p>
            <p><b>email</b> : {comment.email}</p>
            <p><b>text</b> : {comment.body}</p>
            <hr/>
        </div>

    );
};

export default Comment;