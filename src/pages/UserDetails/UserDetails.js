import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import css from "./UserDetails.module.css"


import {userLink} from "../../services/userLink";

const UserDetails = () => {

    let {id} = useParams();

    let [details, setDetail] = useState(null);

    let {state} = useLocation();

    useEffect(()=>{
        if (state){
            setDetail(state)
            return
        }

        userLink.userDetails(id).then(value => setDetail(value))
    },[id])




    return (
        <div>
            {
                details && (
                    <div>
                        <div className={css.detailsBlock}>
                        <h3>User details :</h3>
                        <p>Id : {details.id}</p>
                        <p>Name : {details.name}</p>
                        <p>Username : {details.username}</p>
                        <p>Email : {details.email}</p>
                        <p>City : {details.address.city}</p>
                        <p>Phone : {details.phone}</p>
                        <Link to={'user_posts'}><button>Show posts</button></Link>
                        </div>
                        <div className={css.outletBlock}>
                            <Outlet/>
                        </div>
                    </div>


                )
            }
        </div>
    );
};

export default UserDetails;

