import {createSlice} from '@reduxjs/toolkit'

export const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState: {
        mode: false
    },
    reducers: {
        setMode: state=>{
            state.mode = !state.mode
        }
    }
})

export const {setMode} = darkmodeSlice.actions
export default darkmodeSlice.reducer