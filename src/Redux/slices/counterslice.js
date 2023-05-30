import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberofgoods : 0
}


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) =>{
            state.numberofgoods = state.numberofgoods + 1
        },

        decrement: (state) =>{
            state.numberofgoods = state.numberofgoods - 1
        },
        checkLogin: (state) =>{
            state.Login =!state.login
        }
    }  
})

export default counterSlice.reducer
export const {increment, decrement, checkLogin } = counterSlice.actions
