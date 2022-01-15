import React from 'react';

import css from './Details.module.css'

const UserDetails = ({user:{id,name,username,email,address:{street,city},phone,website},getId}) => {

    return (
        <div className={css.details}>
            <ul>
                <u>Data</u>:
                <li>Name - {name}</li>
                <li>Username - {username}</li>
                <li>Email - {email}</li>
                <u>Address</u>:
                    <ul>
                        <li>Street - {street}</li>
                        <li>City - {city}</li>
                    </ul>
                <li>Phone - {phone}</li>
                <li>Website - <a href={'#'}>{website}</a></li>
            </ul>
            <button onClick={() => getId(id)}>Click to show the posts of this user</button>
        </div>
    );
};

export default UserDetails;