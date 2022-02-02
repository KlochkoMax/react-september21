import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {addNewCar, updateCarByid} from "../../store/index";

const Form = () => {

    let {updateCar} = useSelector(state => state.Cars);

    let {
        handleSubmit,
        reset,
        register,
        setValue,
        formState:{errors}
        } = useForm({mode:"onBlur"});

        let dispatch = useDispatch();


        let addCar = (data) => {
            dispatch(addNewCar({data}));
            reset()
        }

         let editCar = (updateCar, data) =>  {
            console.log(data)
             dispatch(updateCarByid({id:updateCar.id, car:updateCar}));
         }



        useEffect(()=>{
            if (updateCar){
                setValue('model', updateCar.model)
                setValue('price', updateCar.price)
                setValue('year', updateCar.year)
            }
        },[updateCar])



    return (
        <div>
           <form onSubmit={handleSubmit(addCar)}>

               <label>Model: <input
                   {...register('model',{required:'This field is required!'})}/>
               </label>
               <div>
                   {errors?.model && <p>{errors?.model?.message || 'Error'}</p>}
               </div>

               <label>Price: <input
                   type='number'
                   {...register('price',{required:'This field is required!'})}
               />
               </label>
               <div>
                   {errors?.price && <p>{errors?.price?.message || 'Error'}</p>}
               </div>

               <label>Year: <input
                   type='number'
                   {...register('year',{
                       required: true,
                       max:{
                         value:2022,
                         message:'year of issue cannot be older than 2022'
                       },
                       min:{
                           value:1990,
                           message: 'year of issue cannot be younger than 1990'
                       },
                       maxLength:{
                           value:4,
                           message:'Maximum 4 digits!'
                       },
                       minLength:{
                           value:4,
                           message:'Minimum 4 digits'
                       }
                   })}
               />
               </label>
               <div>
                   {errors?.year && <p>{errors?.year?.message || 'This field is required!'}</p>}
               </div>

               <button type="submit">Add new car</button>
               <button type="button" onClick={editCar}>Edit this car</button>
           </form>
        </div>
    );
};

export {Form}