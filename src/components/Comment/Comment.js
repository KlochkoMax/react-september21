import React from 'react';

const Comment = ({comment:{name,body,email,id}}) => {
    return (
        <div>
            <p><u>Id</u> : {id}</p>
            <p><u>Name</u> : {name}</p>
            <p><u>Email</u> : {email}</p>
            <p><u>Body</u> : {body}</p>
        </div>
    );
};

export default Comment;