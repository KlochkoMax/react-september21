import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    let {id, name} = user
    return (
        <div>
            <Link to={id+''} state={user}>{id}. {name}</Link>

            <hr/>
        </div>
    );
};

export default User;