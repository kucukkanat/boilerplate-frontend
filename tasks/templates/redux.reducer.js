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
	if(action.type === '{{actionName}}') {
		// Write your code here
		let newState = {}
		return merge({}, newState)
	} else{
		return merge({},state)
	}
}

export default definition