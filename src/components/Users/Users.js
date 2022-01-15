import React, {useEffect, useState} from 'react';

import User from "./User";
import css from '../../App.module.css'
import {userServices} from "../../services/user.services";

const Users = ({getUser}) => {

    let [users, setUsers] = useState([]);


    useEffect( () => {
        userServices.getAll()
            .then(value => setUsers(value))
    }, [])


    return (
        <div className={css.users}>
            {
                users.map(value => <User key = {value.id} user ={value} getUser={getUser}/>)
            }
        </div>
    );
};

export default Users;