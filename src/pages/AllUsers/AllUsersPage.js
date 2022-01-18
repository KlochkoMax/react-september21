import React, {useEffect, useState} from 'react';

import {userLink} from "../../services/userLink";
import User from "../../components/User/User";
import css from './AllUsers.module.css';
import {Outlet} from "react-router-dom";


const AllUsersPage = () => {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        userLink.allUsers().then(value => setUsers([...value]))
    },[])


    return (
        <div className={css.body}>
            <div className={css.usersBody}>
                <h2>Users:</h2>
                {
                    users.map(value => <User key={value.id} user={value}/>)
                }
            </div>
            <div className={css.outletBody}>
                <Outlet/>
            </div>
        </div>
    );
};

export default AllUsersPage;