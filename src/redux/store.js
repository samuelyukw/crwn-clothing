import {createStore, applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'
import saga from 'redux-saga'

const middlewares = [thunk, saga]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)

export {store, persistor}
