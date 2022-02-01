import React from 'react';
import {useDispatch} from "react-redux";

import {removeCar} from "../../store";
import css from "./Car.module.css"

const Car = ({car:{id,brand,price,year}}) => {

    let dispatch = useDispatch();

    return (
        <div className={css.car}>
            <div>
                <div>Brand: {brand}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(removeCar({id}))}>Remove</button>
        </div>
    );
};

export default Car;