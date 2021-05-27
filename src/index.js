import React from 'react'
import ReactDOM from 'react-dom'
import User from './Components/User'
import Rendering from './Components/Rendering'
import List_key from './Components/List_key'


ReactDOM.render(
  <React.StrictMode>
    <Rendering/>
    <List_key/>
    <User/>
  </React.StrictMode>,
  document.getElementById('root')
)