import React, { useContext, useEffect, useState } from 'react'
import CounterContext from '../Context/CounterContext'

const Home = () => {

    const[allproducts,setallproducts]=useState([])
     async function GetData(ans) {
    let products =await fetch(`https://dummyjson.com/products?limit=0`)
    let data =await products.json()
    console.log(data.products)
    setallproducts(data.products)
    }
    useEffect(()=>{
      GetData()
    },[])
    let ctx=useContext(CounterContext)
  
   
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-3 gap-3 m-auto bg-amber-800' >
      {/* <h1>this is home page</h1> */}
      {allproducts.map((ele,i)=>{
        return <div className='bg-black text-white flex flex-col items-center p-2 gap-2'key={ele.id} > 
          <img src={ele.thumbnail} ></img>
          <p>{ele.title}</p>
          <button className='bg-green-800 p-2 rounded-2xl' onClick={()=>ctx.Addtocart(ele)}>Add to cart</button>
        </div>
      })
      }

    </div>
  )
}

export default Home
