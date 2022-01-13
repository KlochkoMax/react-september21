import React from 'react';
import {userServices} from "../../services/user.services";


const User = ({user}) => {
    console.log(userServices.usersAll())

    return (
            <div className={'user'}>
                <h5>{user.name}</h5>
            </div>
    );
};

export default User;