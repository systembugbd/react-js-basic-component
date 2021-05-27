import React, {useState, useEffect} from 'react'




export default function User(){
     const [newDate, setNewDate] = useState(new Date())

     useEffect(()=>{
          const tick = () => {
               setNewDate(new Date()) 
          }
          setInterval(tick, 1000);
     },[])
     
 
     return(
          <div>
               
            <h2>Functional Component: {newDate.toLocaleTimeString()}</h2>
          </div>
     )
}

