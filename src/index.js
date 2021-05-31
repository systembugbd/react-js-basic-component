import React from 'react'
import ReactDOM from 'react-dom'
import User from './Components/User'
import Rendering from './Components/Rendering'
import List_key from './Components/Listkey'
import FormClass from './Components/FormClass'
import FormFn from './Components/FormFn'
import IncrementWithCustomeHook from './Components/IncrementWithCustomeHook'
import ParentToChild from './App/ParentToChild'
import ChildToParent from './App/ChildToParent'
import PropsDrailling from './App/PropsDrailling'


ReactDOM.render(
  <React.StrictMode>
    <Rendering/>
    <FormFn />
    <FormClass />
    <List_key/>
    <User/>
    <IncrementWithCustomeHook />
    <ParentToChild />
    <ChildToParent />
    <PropsDrailling />
  </React.StrictMode>,
  document.getElementById('root')
)