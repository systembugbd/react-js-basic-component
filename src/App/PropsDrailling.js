import React from 'react'

export default function PropsDrailling() {
     return (
          <div>
               <Next foo="Shaheb Ali" bar={(name)=> `My Name is ${name}`} />        
          </div>
     )
}

const Next = (props) => (
     <Final {...props}/>
)

const Final = (props) => (
     <p>{props.bar(props.foo)}</p>
)
