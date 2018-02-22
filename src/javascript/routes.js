import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import {Dashboard} from '@views'
export default class Routes extends React.Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
    
	render () {
		return (
			<Router>
				<div>
					<Route exact path='/' component={Dashboard} />
				</div>
			</Router>
		)
	}
}
