/**
 * This is the root store for the application
 * 
 * For Language Localization : 
 * 
 * Check here : https://github.com/ryandrewjohnson/react-localize-redux
 * For further info on usage : http://redux.js.org/docs/basics/UsageWithReact.html
 * 
 * @summary Root state store for the application
 * @external Store
 * @author Hilmi Tolga SAHIN (htolgasahin@gmail.com)
 * @copyright htolgasahin@gmail.com
 * @requires redux
 */

import {createStore,combineReducers} from 'redux'

const defaultState = {}
const store = createStore(combineReducers({}),
defaultState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
