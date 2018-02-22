/**
 * This is the Navbar react component.
 * Following parameters are props to pass to the component
 * 
 * @summary Navbar Component <Navbar />
 * @class Navbar
 * @author Hilmi Tolga SAHIN (htolgasahin@gmail.com)
 * @copyright htolgasahin@gmail.com
 * @requires react
 * @requires react-redux
 * @requires prop-types
 */

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


class Navbar extends React.Component {
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
			<div className='react-component-navbar'> 
				<div className='text-center'>
				I am Navbar component 
				</div>
			</div>
		)
	}
}

Navbar.defaultProps = {}
Navbar.propTypes = {}

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
  
export default connect(mapStateToProps,mapDispatchToProps)(Navbar)

