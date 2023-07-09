const redux = require('redux')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers 
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware



const BUY_CAKE = 'BUY_CAKE'
const STOCK_CAKE = 'STOCK_CAKE'
//IceCream for reducer2 
const BUY_ICECREAM = 'BUY_ICECREAM'


//This is our action we are using it to define our action in the redux action is what describing the 
//change in the redux store


//action creator is a function that returns an action

function buyCake() {
    return  {
        type: BUY_CAKE,
        info: 'This is our first action',
    }
}

//action for restocking the cake
function restockCake(qty = 1) {
    return {
        type:STOCK_CAKE,
        quantity: qty,
        info:'This action will restock the cake to initial count'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

//Now the second part which is making a reducer it takes two parameter
const initialCakeState={
    numOfCakes:10,
};
const initialIcecreamState = {
    numOfIceCreams: 15
}
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case STOCK_CAKE : return{
            ...state, 
            numOfCakes: state.numOfCakes + action.quantity
        }
        default: return state;

    }
}


const icecreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - 1
        }
        default: return state 
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
// console.log("InitialState = ", store.getState());

const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(restockCake(4))
// console.log(" update= ", store.getState());
// console.log('icecream = ', store.getState())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();

