/**
 * This is the reducer for {{actionType}} action.
 * {{actionType}} fires this reducer setting state.{{reducerName}}
 * 
 * 
 * @summary {{reducerName}} reducer
 * @external {{reducerName}}
 * @author Hilmi Tolga SAHIN (htolgasahin@gmail.com)
 * @copyright htolgasahin@gmail.com
 * @requires lodash/merge
 */

import merge from 'lodash/merge'

let definition = function (state,action) {
	switch(action.type) {
	case '{{actionName}}':
		return merge(state,action.payload)
		break
	default:
		return merge({
			// Or some default state here
		},state)
	}
}

export default definition