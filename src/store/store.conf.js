import {configureStore} from "@reduxjs/toolkit";
import carReducer from "./car.slice";


let store = configureStore({
    reducer:{
        carReducer
    }
})

export default store
