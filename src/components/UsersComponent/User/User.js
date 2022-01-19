import React from 'react';
import {NavLink} from "react-router-dom"

import css from "./User.module.css"

const User = ({user}) => {

    let {id, name} = user
    let albums = user.id

    return (
        <div className={css.userBlock}>
            <h3>{id}. {name}</h3>
            <NavLink to={albums+''}><button>Show albums</button></NavLink>
        </div>
    );
};

export default User;