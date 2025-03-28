import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CounterState from '../Context/CounterState'
import CounterContext from '../Context/CounterContext'
import { CiMenuFries } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  let ctx=useContext(CounterContext)
  const [showSidebar,setshowSidebar]=useState()
  return (
    <div  className='bg-black flex  h-[60px] w-[100%] justify-end  relative text-white p-2 '>
      <ul  className='md:flex items-center gap-5 hidden '>
        <li><Link to='/'>HOME</Link></li>
        <li className='flex'><Link to='/cart'><FaCartArrowDown size={20}/></Link> <sup >{ctx.cart.length}</sup></li>
       
        <li><Link to='/sign'>SIGNUP</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
        <li><Link to='/view'>VIEWDETAILS</Link></li>
      </ul>
      <ul className='flex flex-col left-0 top-16 h-[max] absolute duration-1000 transform md:hidden items-center gap-8 px-16 py-4 bg-blue-700 text-white'>
        <li><Link to='/'>HOME</Link></li>
        <li className='flex'><Link to='/cart'><FaCartArrowDown size={20}/></Link> <sup >{ctx.cart.length}</sup></li>
       
        <li><Link to='/sign'>SIGNUP</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
        <li><Link to='/view'>VIEWDETAILS</Link></li>
      </ul>
      <div className='md:hidden block '
      onClick={()=>setshowSidebar(!showSidebar)}>
        <CiMenuFries size={26}/>
      </div>
    </div>
  )
}

export default Navbar
