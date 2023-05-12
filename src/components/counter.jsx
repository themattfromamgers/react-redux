import React, {useState} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {arttir, azalt, degistir} from '../redux/counter/counterSlice'



function counter(){

    const [value, setValue] = useState(0)

    const dispatch = useDispatch()
    const {deger} = useSelector(state=> state.counter)
    return(
        <>
            {/* <h1> {values} </h1> */}
            <h1> {deger} </h1>
            <button onClick={state=> dispatch(arttir())}>+</button>
            <button onClick={state=> dispatch(azalt())}>-</button>
            <input type="number" value={value} onChange={e=> setValue(e.target.value)} />
            <button onClick={e=> dispatch(degistir(value))}>degistir</button>
        </>
    )
}

export default counter