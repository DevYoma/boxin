import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
// import reducer, { initialState } from './context/Reducer'
import { StateProvider } from './context/StateProvider' 


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <StateProvider initialState={initialState} reducer={reducer}> */}
        <App />
      {/* </StateProvider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
