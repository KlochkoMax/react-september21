import React from 'react';

const User = ({key,user}) => {
    return (
        <div>
            <ul>
                <li>{Object.keys(user)}</li>
            </ul>
        </div>
    );
};

export default User;