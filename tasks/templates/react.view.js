/**
 * This is the {{viewName}} view.
 * The path for the view is : `{{viewPath}}`
 * 
 * This view is {{#isPublic}}<b>PUBLIC</b>{{/isPublic}} {{^isPublic}}<b>PRIVATE</b>{{/isPublic}}
 * 
 * @summary {{viewName}}
 * @class {{viewName}}
 * @author Hilmi Tolga SAHIN (htolgasahin@gmail.com)
 * @copyright htolgasahin@gmail.com
 * @requires react
 * @requires react-redux
 * @requires prop-types
 */

import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
class View{{viewName}} extends React.Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
	componentWillMount () {

	}
	componentDidMount () {

	}

	render () {
		return (
			<div className='react-view-{{viewName_lowercase}}'> I am {{viewName}} component 
                <style jsx>{style}</style>
            </div>
		)
	}
}

View{{viewName}}.defaultProps = {}
View{{viewName}}.propTypes = {}


const mapStateToProps = function (state) {
	return {
		// ...
	}
}
const mapDispatchToProps = dispatch => {
	return {
		// .. some prop to call dispatch 
	}
}
  
export default connect(mapStateToProps,mapDispatchToProps)(View{{viewName}})
