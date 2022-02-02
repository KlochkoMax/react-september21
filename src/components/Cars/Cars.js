import {useDispatch, useSelector} from "react-redux";

import {useEffect} from "react";
import {getAllCars} from "../../store";

import {Car} from "../Car/Car";
import css from "./Cars.module.css"

const Cars = () => {

    let {cars,status,error} = useSelector(state=> state.Cars);

    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars())
    },[])

    return (

        <div className={css.cars}>
            {status === 'pending' && <h2>Loading...</h2>}
            {error&&<h2>{error}</h2>}
            {cars.map( car=> <Car key={car.id} car={car}/> )}
        </div>
    );
};

export {Cars};