import React from "react"
import {Provider} from "react-redux"
import store from "./store/store"

import ExampleComponent from "./components/ExampleComponent/index"

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render (){
    return <Provider store={store}>
      <div> Hello world!  <ExampleComponent /></div>
    </Provider>
  }
}