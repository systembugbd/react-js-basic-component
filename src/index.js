import React from 'react'
import ReactDOM from 'react-dom'
import User from './Components/User'
import Rendering from './Components/Rendering'
import List_key from './Components/Listkey'
import FormClass from './Components/FormClass'
import FormFn from './Components/FormFn'
import IncrementWithCustomeHook from './Components/IncrementWithCustomeHook'


ReactDOM.render(
  <React.StrictMode>
    <Rendering/>
    <FormFn />
    <FormClass />
    <List_key/>
    <User/>
    <IncrementWithCustomeHook />
  </React.StrictMode>,
  document.getElementById('root')
)