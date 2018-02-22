/**
 * This is the Dashboard view.
 * The path por tthe view is : &#x2F;
 * 
 * This view is  <b>PRIVATE</b>
 * 
 * @summary Dashboard
 * @class Dashboard
 * @author Hilmi Tolga SAHIN (hsahin@virtual-affairs.com)
 * @copyright Virtual Affairs B.V.
 * @requires react
 * @requires react-redux
 * @requires prop-types
 */

import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class ViewDashboard extends React.Component {
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
			<div className='react-view-dashboard'> 
                I am <span className='strong'>Dashboard</span> component 

				<style jsx>{`
                    .react-view-dashboard {
                        padding:20px;
                    }
                    .strong{
                        font-weight: bold
                    }
                `}</style>
			</div>
		)
	}
}

ViewDashboard.defaultProps = {}
ViewDashboard.propTypes = {}


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
  
export default connect(mapStateToProps,mapDispatchToProps)(ViewDashboard)