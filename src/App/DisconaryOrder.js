import React, { Component } from 'react'

export default class DisconaryOrder extends Component {

     constructor(props) {
          super(props)

          this.state={
               input:""
          }
     }

     parentInputHandler(childOneData){
          this.setState({ input: childOneData})
     }


     render() {
          return (
               <div>
                    <ChildOne InputHandlerCallback={this.parentInputHandler.bind(this)} />
                    <ChildTwo data={this.state.input} />
               </div>
          )
     }
}


class ChildOne extends Component {

     render() {
         this.handelChange= (e) =>{
             this.props.InputHandlerCallback(e.target.value)
          }
         return (
               <p>
                    Input comming from Child One via Parent Components
                    <input type="text" placeholder="input here" onChange={this.handelChange.bind(this)} />
               </p>
          )
     }
}

class ChildTwo extends Component {
     render() {
          return(
             <p>Here is the Child Two {this.props.data}</p>
          )
     }
}