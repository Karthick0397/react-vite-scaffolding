import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { Provider } from "react-redux"
import { store as configureStore } from "react-boilerplate-redux-saga-hoc"
import { Router } from "react-router-dom"
import history from "./utils/history"

const initialState = {}

const store = configureStore(initialState)

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  // </React.StrictMode>,
)

