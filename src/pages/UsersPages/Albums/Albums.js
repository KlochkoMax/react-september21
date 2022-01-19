import React, {useEffect, useState} from 'react';

import {Outlet, useParams} from "react-router-dom";
import {links} from "../../../services/users.services";
import Album from "../../../components/UsersComponent/Album/Album"
import css from "./Albums.module.css"

const Albums = () => {

    let {albums} = useParams();

    let id = albums;

    let [album, setAlbum] = useState([]);

    useEffect(()=>{
        links.allAlboms(id).then(value => setAlbum([...value]))
    },[id])


    return (
        <div>
            <h3><u>Albums</u></h3>
            <div className={css.albums}>
                {
                    album.map(value => <Album key = {value.id} album = {value}/> )
                }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Albums;