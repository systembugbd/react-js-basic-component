import React from 'react'
import useCustomeHook from './useCustomeHook'

export default function IncrementWithCustomeHook() {
     // let [count, setCount] = React.useState(0)
     const orderBook = useCustomeHook()

     React.useEffect(() =>{
          document.title= `You Cliked ${orderBook.orderCount.count} times`
     }, [orderBook.orderCount.count])


     return (
          <div>
               <button onClick={orderBook.chnageOrderCountMinus}>Click Me to Minus</button>
               <span>You added {orderBook.orderCount.count} Items</span>
               <button onClick={orderBook.changeOrderCountPlus}>Click Me to Plus</button>
          </div>
     )
}
