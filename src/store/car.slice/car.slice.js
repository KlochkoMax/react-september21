import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {carService} from "../../services";



const initialState = {
    cars:[],
    status:null,
    error:null,
    updateCar:null
}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
        async(_,{rejectWithValue})=>{
            try {
                const cars = await carService.getAll();
                return cars
            }catch (e){
                return rejectWithValue(e.message)
            }
        }
)

export let updateCarByid = createAsyncThunk(
    'carSlice/updateCarByid',
         async ({id, car}, {dispatch})=>{
                const newCar = await carService.updateById(id, car);
                dispatch(updateCar({car:newCar}))
         }
)

export const addNewCar = createAsyncThunk(
            'carSlice/addNewCar',
            async ({data},{dispatch})=>{
                try {
                    const newCars = await carService.create(data);
                    dispatch(addCar({data:newCars}))
                }catch (e){

                }
            }
)

export const removeCar = createAsyncThunk(
        'carSlice/removeCar',
        async ({id},{dispatch}) =>{
            try {
                await carService.deleteById(id)
                dispatch(deleteCar({id}))
            }catch (e){

            }
        }

)

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{

        updateCar:(state,action)=>{
            const index = state.cars.findIndex(car=>car.id===action.payload.car.id)
            state.cars[index] = action.payload.car
        },

        updateButton:(state,action)=>{
            state.updateCar = action.payload.car
        },

        addCar: (state,action) =>{
            state.cars.push(...action.payload.data,)
        },

        deleteCar: (state,action) =>{
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers:{
        [getAllCars.pending]:(state,action)=>{
            state.status = 'Pending'
            state.error = null
        },
        [getAllCars.fulfilled]:(state,action)=>{
            state.status = 'fulfiled'
            state.cars =  action.payload
        },
        [getAllCars.rejected]:(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        }
    }

})



const carReducer = carSlice.reducer;

export const {addCar , deleteCar, updateButton, updateCar} = carSlice.actions;
export default carReducer;
