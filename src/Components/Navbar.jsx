import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div  className='bg-black flex  h-[80px] w-[100%] justify-between  relative '>
      <ul className='flex text-white gap-3 justify-end items-center right-0 absolute p-6 '>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/cart'>CART</Link> <sup >0</sup></li>
       
        <li><Link to='/sign'>SIGNUP</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
        <li><Link to='/view'>VIEWDETAILS</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
