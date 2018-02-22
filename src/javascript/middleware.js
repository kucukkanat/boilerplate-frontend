const middleware = store => next => action => {
	next(action)
	console.log('Middleware : ',store.getState(),action)
}

export default middleware