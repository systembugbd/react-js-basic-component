import React from 'react'

export default function useCustomeHook() {

  const [orderCount, setOrderCount] = React.useState({count:0})

  const changeOrderCountPlus=()=>{
    setOrderCount({count: orderCount.count + 1})
  }

  const chnageOrderCountMinus = () => {
    setOrderCount({count: orderCount.count - 1})
  }


  return {orderCount, changeOrderCountPlus, chnageOrderCountMinus}

}
