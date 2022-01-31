import React from 'react';
import Car from "../Car/Car";
import {useSelector} from "react-redux";

const Cars = () => {

    let {cars} = useSelector(state => state['carReducer']);



    return (
        <div>
            {
                cars.map( value => <Car key={value.id} car={value}/>)
            }
        </div>
    );
};

export default Cars;