import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCar} from "../../store";
import css from "./Form.module.css"

const Form = () => {

    let { handleSubmit,
          register,
          reset,
          formState:{errors}
        } = useForm({mode:"onBlur"});

    let dispatch = useDispatch();

    let submit = (data) => {
        dispatch(addCar({data}))
        reset()
    }

    return (
        <div className={css.form}>
            <h1>Add a new car<hr/></h1>
            <form onSubmit={handleSubmit(submit)}>

                <label>Model: <input
                    type="text"
                    {...register('model',{
                        required: 'This field is required!'
                    })}/>
                </label>
                <div>
                    {errors?.model && <p>{errors?.model?.message || "Error"}</p>}
                </div>

                <label>Price: <input
                    type="number"
                    {...register('price',{
                        required: 'This field is required!',
                    })}/>
                </label>
                <div>
                    {errors?.price && <p>{errors?.price?.message || "Error"}</p>}
                </div>

                <label>Year:  <input
                    type="number"
                    {...register('year',{
                        required:true,
                        maxLength: {
                            value:4,
                            message:'Maximum 4 digits!'
                        },
                        minLength: {
                            value:4,
                            message:'Minimum 4 digits'
                        }
                    })}/>
                </label>
                <div>
                    {errors?.year && <p>{errors?.year?.message || 'This field is required!' }</p>}
                </div>

                <input type="submit" value="Add" />

            </form>
        </div>
    );
};

export default Form;