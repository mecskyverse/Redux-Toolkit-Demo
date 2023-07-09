const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice.js')
const iceCreamReducer = require('../features/icecream/iceCreamSlice.js')
// const reduxLogger = require('redux-logger')
const userReducer = require('../features/user/userSlice.js')

// const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer: {
        cake:cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store