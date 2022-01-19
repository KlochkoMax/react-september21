import React from 'react';
import {NavLink} from "react-router-dom";


const Album = ({album}) => {

    let {id, title} = album;

    let photos = album.id

    return (
        <div>
            <NavLink to={photos+''}>
                <p>{id}.<u> {title}</u></p>
            </NavLink>
        </div>
    );
};

export default Album;