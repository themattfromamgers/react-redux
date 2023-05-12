import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setMode} from '../redux/counter/darkmodeSlice'
function darkmode(){
    const {mode} = useSelector(state=> state.darkmode)
    const dispatch = useDispatch()
    return(
        <>
            <h1> {mode ? 'darkmode' : 'light mod'} </h1>
            <button onClick={state=>dispatch(setMode())}>Değtir</button>
        </>
    )
}

export default darkmode