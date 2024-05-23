// store configuation file
import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";
import cartSlice from "./cartSlice";

//configure store will give our store of our react application
const appStore = configureStore({
    reducer:{
       cart:cartSlice
    }
})

export default appStore;
 

