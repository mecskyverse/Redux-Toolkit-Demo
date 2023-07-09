const createSlice = require('@reduxjs/toolkit').createSlice

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
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions  