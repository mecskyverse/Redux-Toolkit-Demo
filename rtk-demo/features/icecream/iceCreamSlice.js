const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCreams : 20
}
const iceCreamSlice = createSlice({
    name: 'iceCream',
    //short for initialState : initialState
    initialState,
    reducers: {
        ordered : (state) =>{
            state.numOfIceCreams--;
        },
        restocked: (state, action)=>{
            state.numOfIceCreams += action.payload;
        } 
    },
    /*
    If we want to overlap between two different reducers for ex when a cake ordered
    we give icecream for free we use extraReducers to complete that action now there 
    are two ways of doing this first is easy but not reccomended and second is little bit clunky 
    */
    // extraReducers: {
    //     ['cake/ordered']: (state)=> {
    //         state.numOfIceCreams--;
    //     },
    // },

    extraReducers:(builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIceCreams--
        })
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions