import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {links} from "../../../services/users.services";
import Photo from "../../../components/UsersComponent/Photo/Photo";
import css from "./Photos.module.css"

const Photos = () => {

    let {photos} = useParams();

    let id = photos

    let [photo, setPhoto] = useState([]);

    useEffect(()=>{
        links.allPhotos(id).then(value => setPhoto([...value]))
    },[id])

    return (
        <div>
        <h3 style={{textDecoration:"underline", margin: "0"}}>Photos</h3>
            <div className={css.photos}>
            {
                photo.map(value => <Photo key={value.id} photo = {value}/>)
            }
            </div>
        </div>
    );
};

export default Photos;