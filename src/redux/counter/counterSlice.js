import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        deger: 0
    },
    reducers:{
        arttir: (state)=>{
            state.deger +=1
        },
        azalt:(state)=>{
            state.deger -=1
        },
        degistir:(state, action)=>{
            state.deger += Number(action.payload) 
        }
    },
})

export const {arttir, azalt, degistir} = counterSlice.actions
export default counterSlice.reducer