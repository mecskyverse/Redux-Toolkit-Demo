const { default: axios } = require('axios')
const redux = require('redux')
const { default: thunk } = require('redux-thunk')
const createStore = redux.createStore
const thunkMiddleware = require('redux-thunk').default

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEDED = 'FETCH_USERS_SUCCEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


const fetchUser = () =>{
return {
    type: FETCH_USERS_REQUESTED,
}
}
const fetchSucceded = (users) => {
    return {
        type: FETCH_USERS_SUCCEDED,
        payload: users
    }
}

const fetchFailed = (error) => {
    return {
        type : FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED: 
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEDED:
            return {
                loading: false,
                data : action.payload,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                data : [],
                error: action.payload
            }
        default : return state
    }
}

const fetchUsers = () =>{
    return function(dispatch) {
        dispatch(fetchUser())

        axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data.map((user) => user.id)
            dispatch(fetchSucceded(users))
        }).catch(error => {
            dispatch(fetchFailed(error.message))
        })

    }
}
const store = createStore(reducer, redux.applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUsers())