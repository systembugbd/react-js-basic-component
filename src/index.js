import React from 'react'
import ReactDOM from 'react-dom'
import User from './Components/User'
import Rendering from './Components/Rendering'
import List_key from './Components/List_key'
import FormClass from './Components/FormClass'


ReactDOM.render(
  <React.StrictMode>
    <Rendering/>
    <FormClass />
    <List_key/>
    <User/>
  </React.StrictMode>,
  document.getElementById('root')
)