import React from 'react';

import css from './User.module.css'

const User = ({user,getUser}) => {

    let {name} = user

    return (
            <div className={css.user}>
                <h5>{name}</h5>
                <button onClick={()=>getUser(user)}>get details</button>
            </div>
    );
};

export default User;