import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    //short for initialState: initialState
    initialState,
    reducers: {
        ordered : (state)=> {
            state.numOfCakes--;
        },
        restocked : (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

// console.log("cakeSlice = ", cakeSlice)
export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions  