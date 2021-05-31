import React from 'react'

export default function ChildToParent() {
     const [order, setOrder] = React.useState({
          size: "Medium",
          price: "$8"
     })

     const CallbackHandler= (newsize) => {
          setOrder({
               size:newsize.size,
               price:newsize.price
          })
     }
     return (
          <div>
               <Store {...order} parentCallBackHandeler={CallbackHandler} />
          </div>
     )
}

function Store(props){
     return(
          <Pizza {...props} />
     )
}

function Pizza(props){

     const handelTrigger = ()=>{
          props.parentCallBackHandeler({
               size:"Small",
               price: "$5"
          })
     }

     return (
          <ul>
               <li>
                    {props.size} - {props.price}
                    <button onClick={handelTrigger}>Click To Change {props.size}</button>
               </li>
          </ul>
     )
}
