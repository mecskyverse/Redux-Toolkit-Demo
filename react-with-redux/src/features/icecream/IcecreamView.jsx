import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'
export const IcecreamView = () => {

    const [restockNumber, setRestockNumber] = useState(1);
    const numOfIcecream = useSelector((state) => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of ice creams- {numOfIcecream}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
            <input type="number" value={restockNumber} placeholder='Enter Stock Value' onChange={e => setRestockNumber(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(restockNumber))}>Restock Ice Creams</button>
        </div>
    )
}
