import React, { useContext, useMemo } from 'react'
import CounterContext from '../Context/CounterContext'

const Cart = () => {
  let ctx=useContext(CounterContext)
 
  console.log(ctx)
  let memo=useMemo(()=>{
    let sum=0
    for(let val of ctx.cart){
      sum =sum+val.price
    }
    return sum
  }, [ctx.cart])




  const handledelete=(obj,i)=>{
     console.log(obj)
     let copyArr=[...ctx.cart]
     copyArr.splice(i,1)
     ctx.setCart(copyArr)
  }
  const handleIncrement=(obj,i)=>{
    obj.price=obj.price+(obj.price/obj.quantity)
    obj.quantity=obj.quantity+1
    let copyArr=[...ctx.cart]
    copyArr[i]=obj
    ctx.setCart(copyArr)

  }
  const handleDecrement=(obj,i)=>{
    if(obj.quantity>1){
    obj.price=obj.price-(obj.price/obj.quantity)
    obj.quantity=obj.quantity-1
    let copyArr=[...ctx.cart]
    copyArr[i]=obj
    ctx.setCart(copyArr)
    }else{
      handledelete(obj,i)
    }

  }
  return (
    <div>
      <table className="w-[100%] border-4 bg-white text-center border-green-400 text-black text-sm  rtl:text-right">
      <thead className="text-xs">
      
          <tr>
            <th>SNO</th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            
          </tr>
        </thead>
        <tbody>
          {  ctx.cart.map((ele,i)=>{
          return <tr className="bg-w border-b border-gray-200">
          <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
             {i+1}
            </th>
          <td className="px-6 py-4">
              <img src={ele.thumbnail} className='w-[100px] m-auto h-[100px]' alt="" />
            </td>
             <td className="px-6 py-4">
               ${ele.price.toFixed(2)}
             </td>
             <td className="px-6 py-4">
                <button className='bg-blue-700 rounded-md px-3 py-2 text-white mx-1' onClick={()=>handleIncrement(ele,i)}>+</button>
                 {ele.quantity} 
                <button className='bg-green-700 rounded-md px-3 py-2 text-white mx-1' onClick={()=>handleDecrement(ele,i)}>-</button> 
              </td>
              <td>
             <button className='bg-red-700 text-white hover:bg-red-600 px-3 py-2 rounded-md' onClick={()=>handledelete(ele,i)}>Delete</button>
             </td>
         </tr>

          })
}
        </tbody>
      </table>
      <h1>total=${memo.toFixed()}</h1>
    </div>
  )
}

export default Cart
