import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import {weatherReducer} from './weatherReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  state: weatherReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
