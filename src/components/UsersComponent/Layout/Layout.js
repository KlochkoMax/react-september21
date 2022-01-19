import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css"

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <h2><NavLink to={'/users'}>Users</NavLink></h2>
            </div>


            <div className={css.outlet}>
                <Outlet/>
            </div>


            <div className={css.footer}>
                <p>Classwork3</p>
            </div>
        </div>
    );
};

export default Layout;