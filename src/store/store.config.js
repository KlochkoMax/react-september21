import {configureStore} from "@reduxjs/toolkit"

import carReducer from "./car.slice/car.slice";

const store = configureStore({
    reducer:{
        Cars: carReducer
    }
})

export default store