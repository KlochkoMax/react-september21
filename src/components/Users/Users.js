import React, {useEffect, useState} from 'react';

import User from "./User";
import {userServices} from "../../services/user.services";

const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect( () => {
        userServices.usersAll()
            .then(value =>setUsers(value))
    }, [])

    return (
        <div className={'users'}>
            {
                users.map(value => <User key = {value.id} user ={value}/>)
            }
        </div>
    );
};

export default Users;