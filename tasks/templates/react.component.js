/**
 * This is the {{componentName}} react component.
 * Following parameters are props to pass to the component
 * 
 * @summary {{componentName}} Component <{{componentName}} />
 * @class {{componentName}}
 * @author Hilmi Tolga SAHIN (htolgasahin@gmail.com)
 * @copyright htolgasahin@gmail.com
 * @requires react
 * @requires react-redux
 * @requires prop-types
 */

import React from 'react'
import PropTypes from 'prop-types'
{{#reduxEnabled}}
import {connect} from 'react-redux'
{{/reduxEnabled}}
{{#stylingEnabled}}
import {style} from './style'
{{/stylingEnabled}}

class {{componentName}} extends React.Component {
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
			<div className='react-component-{{componentName_lowercase}}'> I am {{componentName}} component 

                {{#stylingEnabled}}
                <style jsx>{style}</style>
                {{/stylingEnabled}}
            </div>
		)
	}
}

{{componentName}}.defaultProps = {}
{{componentName}}.propTypes = {}

{{#reduxEnabled}}
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
  
export default connect(mapStateToProps,mapDispatchToProps)({{componentName}})
{{/reduxEnabled}}

{{^reduxEnabled}}
export default {{componentName}}
{{/reduxEnabled}}
