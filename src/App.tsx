import React from "react"
import {Provider} from "react-redux"
import store from "./store/store"

type AppProps={}
export default class App extends React.Component {
  constructor(props: AppProps) {
    super(props)
  }
  render (){
    return <Provider store={store}>
      <div> Hello world! </div>
    </Provider>
  }
}