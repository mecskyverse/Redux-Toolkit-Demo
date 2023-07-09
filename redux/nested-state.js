const redux = require("redux")
const produce = require('immer').produce

const initialState = {
    name:'Aakash',
    address: {
        St: 'Santaram Colony',
        city: 'Indore',
        state: 'MA',
    },
}

const STREET_UPDATED = 'STREET_UPDATED'

const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    }
}

const reducer = (state = initialState, action) => {
     switch(action.type){
        case STREET_UPDATED: 
        // return {
        //     ...state,
        //     address: {
        //         ...state.address,
        //         St: action.payload,
        //     },
        // }

        //Now we will do the above object update with help of immer nice!

        return produce(state, (draft) => {
                draft.address.St = action.payload;
        })

        default :{ return state}
     }
}
const store = redux.createStore(reducer)

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log("Updated State = ", store.getState()))

store.dispatch(updateStreet("Raval pindi"))