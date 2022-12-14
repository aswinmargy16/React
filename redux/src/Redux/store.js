import {messageReducer} from "./Message/message.reducer"
import{legacy_createStore as createStore}from'redux'
import{composeWithDevTools}from "redux-devtools-extension"
let store=createStore(messageReducer,composeWithDevTools())
export{store}