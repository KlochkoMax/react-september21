import React from 'react';

const Post = ({post:{id,title,body}}) => {
    return (
        <div>
            <p>{id}. title - {title}</p>
            <p>text : {body}</p>
        </div>
    );
};

export default Post;