import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import darkmodeSlice from './counter/darkmodeSlice'
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        darkmode: darkmodeSlice

    }
})