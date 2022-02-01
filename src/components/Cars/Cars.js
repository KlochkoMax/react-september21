import React from 'react';
import Car from "../Car/Car";
import {useSelector} from "react-redux";

import css from "./Cars.module.css"

const Cars = () => {

    let {cars} = useSelector(state => state['carReducer']);



    return (
        <div className={css.cars}>
            {
                cars.map( value => <Car key={value.id} car={value}/>)
            }
        </div>
    );
};

export default Cars;