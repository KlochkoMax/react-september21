import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";


import {addCar} from "../../store";

const Form = () => {

    let {handleSubmit,register,reset} = useForm();

    let dispatch = useDispatch();

    let submit = (data) => {
        dispatch(addCar({data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Brand: <input type="text" {...register('brand')}/> </label>
                <label>Price: <input type="text" {...register('price')}/> </label>
                <label>Year: <input type="text" {...register('year')}/> </label>
                <button>Save a car</button>
            </form>
        </div>
    );
};

export default Form;