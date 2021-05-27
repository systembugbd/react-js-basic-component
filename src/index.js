import React from 'react'
import ReactDOM from 'react-dom'
import User from './Components/User'
import Rendering from './Components/Rendering'

ReactDOM.render(
  <React.StrictMode>
    <Rendering/>
    <User/>
  </React.StrictMode>,
  document.getElementById('root')
)