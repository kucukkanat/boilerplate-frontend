/**
 * 
 * @class FranxButton
 * @prop onClick Click function
 * @prop id
 * @prop type Submit or button
 * @prop disabled Disabled or not
 */
import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
export default class FranxButton extends React.Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
	componentDidMount () {}
	componentWillReceiveProps () {}
	render () {
		let shared = {
			'id': this.props.id,
			'onClick': this.props.onClick,
			'label': this.props.label,
			'type': this.props.type ? this.props.type : 'button',
			'disabled': this.props.disabled,
			'backgroundColor': this.props.grey ? '#949494' : '#40abc3',
			'labelStyle': {
				'color': '#FFFFFF',
				'textTransform': 'none',
				'fontFamily': 'Arial',
				'fontSize': 16,
				'padding': '8px 15px'
			},
			'buttonStyle': {
				'borderRadius': 40,
				'minWidth': 130
			},
			'style': {
				'overflow': 'hidden',
				'borderRadius': 40
			}
		}
		return <RaisedButton backgroundColor="#949494" {...shared} />
	}
}
