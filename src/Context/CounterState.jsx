import React, { useState } from 'react'
import CounterContext from './CounterContext'


const CounterState = (props) => {
  const [cart, setCart] = useState([]);

  const Addtocart=(ans)=>{
   console.log(ans)
   ans.quantity=1
   let find=cart.find((item)=>item.id===ans.id)
   if(find){
    alert('item already added')
   }
   else{
    setCart([...cart,ans])
    alert('items added successfully')
   }

  }
  return (
    <CounterContext.Provider value={{ cart, Addtocart }}>
            {props.children}
        </CounterContext.Provider>
  )
}

export default CounterState
