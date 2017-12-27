/**
 * This is the action creator named {{actionName}}.
 * 
 * @summary {{actionName}} reducer
 * @external {{actionName}}
 * @author Hilmi Tolga SAHIN (hsahin@virtual-affairs.com)
 * @copyright Virtual Affairs B.V.
 */

import merge from 'lodash/merge'

let definition = function (payload) {
	return (dispatch) => {
		dispatch({
			'type' : `{{{actionName}}}`,
			payload
		})
	}
}

export default definition
