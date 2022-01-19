import React, {useEffect, useState} from 'react';
import {links} from "../../../services/users.services";
import User from "../../../components/UsersComponent/User/User";
import {Outlet} from "react-router-dom";
import css from "./Users.module.css"

const Users = () => {

    let [user, setUser] = useState([]);

    useEffect(()=>{
        links.allUsers().then(value => setUser([...value]));
    },[]);

    return (
        <div className={css.body}>
            <div className={css.users}>
                <h3><u>Users</u></h3>
                    {
                    user.map(value => <User key={value.id} user={value} />)
                    }
            </div>
            <div className={css.albums}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Users;