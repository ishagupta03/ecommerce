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

    const [currenPage, setcurrenPage] = useState(1);
    const itemPerPage = 10;
    const lastIndex = itemPerPage * currenPage;
    const firstIndex = lastIndex - itemPerPage;
    let noOfBtn = Math.ceil(allproducts.length / itemPerPage);
    console.log(noOfBtn) //20

    let slicedArr = allproducts.slice(firstIndex, lastIndex);
    console.log(slicedArr)
    
  return (
    <div>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 p-3 gap-3 m-auto bg-amber-800' >
      {/* <h1>this is home page</h1> */}
      {slicedArr.map((ele,i)=>{
        return <div className='bg-black text-white flex flex-col items-center p-2 gap-2'key={ele.id} > 
          <img src={ele.thumbnail} ></img>
          <p>{ele.title}</p>
          <button className='bg-green-800 p-2 rounded-2xl' onClick={()=>ctx.Addtocart(ele)}>Add to cart</button>
        </div>
      })
      }
</div>
<div className='flex justify-center bg-amber-400 gap-3' >
<button
  className='bg-black text-white rounded-md p-1 mx-1'
  onClick={() => {setcurrenPage(1)}}> &larr;</button>
<button
  className='bg-black text-white rounded-md p-1 mx-1'
  onClick={() => {
    if (currenPage > 1) {
      setcurrenPage(currenPage - 1);
    }
  }}>
  Prev
</button>

  {
    Array(noOfBtn).fill('').map((ele,i)=>{
      return  i+1>=currenPage && i+1<currenPage+5 && <button className={`${currenPage===i+1?'bg-green-400':'bg-white'} flex justify-center gap-4 rounded-md  p-1 w-5`} onClick={()=>setcurrenPage(i+1)}>{i+1}</button>
        
    })
  }
   {currenPage <noOfBtn-4 && <button className='bg-black text-white rounded-md p-1 mx-1'>...</button>}
<button
  className='bg-black text-white rounded-md p-1 mx-1'
  onClick={() => {
    if (currenPage <noOfBtn) {
      setcurrenPage(currenPage +1 );
    }
   
  }}
>
  Next
</button>
<button
  className='bg-black text-white rounded-md p-1 mx-1'
  onClick={() => {setcurrenPage(noOfBtn)}}> &rarr;</button>
  </div>
    </div>
  )
}

export default Home
