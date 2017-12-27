import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from '@root/store'
import Routes from '@root/routes'

const root = document.getElementById('react-root')
ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	root
)