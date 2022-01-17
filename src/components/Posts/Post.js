import React from 'react';
import css from './Post.module.css'

const Post = ({post:{id,title,body}}) => {
    return (
        <div className={css.post}>
            <p><u>title</u> - {title}</p>
            <p><u>text</u> : {body}</p>
            <hr/>
        </div>
    );
};

export default Post;