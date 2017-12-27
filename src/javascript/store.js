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

import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import middleware from '@root/middleware'
import ReduxThunk from 'redux-thunk'

const defaultState = {}
const store = createStore(combineReducers({
	'example': (state, action) => {
		return {'exampleState': true}
	}
}), defaultState, composeWithDevTools(applyMiddleware(middleware,ReduxThunk)))
export default store
