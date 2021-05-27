import React, { Component } from 'react'

export default class List_key extends Component {

     constructor(props) {
          super(props)
          this.listarr = [1,2,3,4,5,6,7,8,9,"Hello", "I am from List Class"]
          this.listHandler = this.listHandler.bind(this)
     }

     listHandler(e){
          console.log(e.target.lastChild.data)
          let itemClicked = e.target.lastChild.data ? window.confirm("You clicked on '"+e.target.innerText + "'") : "";
          let a= itemClicked ? alert("Thanks You chose -" + e.target.innerText) : "";
     }
     maplist(){
         this.listEl =  this.listarr.map((list) =>{
             return <List key={list.toString()} value={list} onClick={this.listHandler} />
          })
      return  this.listEl;
     }

     render() {
          return (
               <div>
                    <ul>
                         <li>I am list</li>
                         {this.maplist()}
                    </ul>
               </div>
          )
     }
}


 
function List(props) {
  
     let value = props.value
   
     return (<li onClick={props.onClick}>{value}</li>)
}
