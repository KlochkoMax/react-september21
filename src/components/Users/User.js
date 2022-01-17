import React from 'react';
import css from './User.module.css'

const User = ({user:{name,username,email}}) => {
    return (
        <div className={css.user}>
            <p> name : {name}, username : {username}, email : {email}</p>
        </div>
    );
};

export default User;