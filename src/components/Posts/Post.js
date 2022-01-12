import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <p><u>title</u> : {post.title}</p>
            <p><u>post</u> : {post.body}</p>
        </div>
    );
};

export default Post;