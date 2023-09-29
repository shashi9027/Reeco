import {configureStore} from "@reduxjs/toolkit"
import orderReducer  from "./slice/order"

export const store = configureStore({
    reducer :{
      order: orderReducer
    }
})