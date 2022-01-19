import React from 'react';
import {NavLink} from "react-router-dom";
import css from "./User.module.css"

const User = ({user}) => {
    let {id, name} = user
    return (
        <div className={css.user}>
            <NavLink to={id+''} state={user}><p>{id}. {name}</p></NavLink>

            <hr/>
        </div>
    );
};

export default User;