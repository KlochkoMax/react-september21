import React from 'react';

const AllUserPost = ({post}) => {
    console.log(post)
    return (
        <div>
            <p><u>Id</u> : {post.id}</p>
            <p><u>Title</u> : {post.title}</p>
            <p><u>Body</u> : {post.body}</p>
        </div>
    );
};

export default AllUserPost;