import React from 'react';
import {useDispatch} from "react-redux";
import {removeCar} from "../../store";

const Car = ({car:{id,brand,price,year}}) => {

    let dispatch = useDispatch();

    return (
        <div>
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