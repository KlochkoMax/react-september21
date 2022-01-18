import React from 'react';
import {Link, Outlet, NavLink} from "react-router-dom";

import css from "./Header.module.css";


const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <h2><NavLink to={'/users'}>Users</NavLink></h2>
                <h2><NavLink to={'/posts'}>Posts</NavLink></h2>
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>

            <div className={css.footer}>
                <span>Homework3</span>
            </div>
        </div>

    );
};

export default Header
