import {createSlice} from "@reduxjs/toolkit";


let carSlice = createSlice({
    name: 'carsSlice',
    initialState :{
        cars:[]
    },
    reducers:{
        addCar:(state,action) =>{
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        removeCar:(state,action)=>{
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    }
})

let carReducer = carSlice.reducer

export let {addCar,removeCar} = carSlice.actions;
export default carReducer;
