import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
export const CakeView = () => {
    const dispatch = useDispatch();
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    console.log(numOfCakes)
    return (
        <div>
            <h2>Number of Cake - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(4))}>Restock Cake</button>
        </div>
    )
}
