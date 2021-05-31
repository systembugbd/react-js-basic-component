import React from 'react'

const order={
     price: "$8",
     size: "medium"
}
const order2={
     price: "$6",
     size: "small"
}
const handelOrder= (e) => {
     let text= e.target.innerText.split("-")
     console.table(text[1])

}

export default function ParentToChild() {
     return (
          <div>
               <Store {...order} onClick={handelOrder}/>
               <Store {...order2} onClick={handelOrder}/>
          </div>
     )
}

function Store(props) {
    return(
          <Pizza {...props} onClick={props.onClick} />
    )
}

function Pizza(props){
     return(
          <ul>
               <li onClick={props.onClick}>
                    {props.size.trim()} - {props.price.trim()} - Parent To Child Data passing
               </li>
          </ul>
     )
}
