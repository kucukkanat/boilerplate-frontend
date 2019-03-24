import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxState from "./types"
const store = createStore(combineReducers<{}>(reducers), composeWithDevTools(applyMiddleware(thunk)))

export default store