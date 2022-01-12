import React from 'react';

const User = ({user}) => {
    // console.log(user)
    return (
        <div>
            <h4>{user.name}</h4>
            <p><b>username</b> - {user.username},  <b>email</b> - {user.email}</p>
        </div>
    );
};

export default User;