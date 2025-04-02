import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CounterState from '../Context/CounterState'
import CounterContext from '../Context/CounterContext'
import { CiMenuFries } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import UserContext from '../Context/UserContext';

const Navbar = () => {
  let userStore = useContext(UserContext);
  console.log(userStore)
  let login = userStore.user.login

  let ctx=useContext(CounterContext)
  const [showSidebar,setshowSidebar]=useState()
  return (
    <div  className='bg-black flex  h-[60px] w-[100%] justify-end  relative text-white p-2 '>
      <ul  className='md:flex items-center gap-5 hidden '>
        {login===true&& <li><Link to='/'>HOME</Link></li>}
       { login===true&&<li className='flex'><Link to='/cart'><FaCartArrowDown size={20}/></Link> <sup >{ctx.cart.length}</sup></li>}
        {login===true&&<li><Link to='/view'>VIEWDETAILS</Link></li>}
      {  login===false&&<li className='bg-orange-600 p-2 rounded'><Link to='/sign'>SIGNUP</Link></li>}
     {  login===false&& <li className='bg-green-700 p-2 rounded'><Link to='/login'>LOGIN</Link></li>}
       
      </ul>
      <ul className='flex flex-col left-0 top-16 h-[max] absolute duration-1000 transform md:hidden items-center gap-8 px-16 py-4 bg-blue-700 text-white'>
       { login===true&&<li><Link to='/'>HOME</Link></li>}
   {login===true&&<li className='flex'><Link to='/cart'><FaCartArrowDown size={20}/></Link> <sup >{ctx.cart.length}</sup></li>}
      
      {login===false&&  <li><Link to='/sign'>SIGNUP</Link></li>}
     {  login===false&& <li><Link to='/login'>LOGIN</Link></li>}
        {login===true&&<li><Link to='/view'>VIEWDETAILS</Link></li>}
      </ul>
      <div className='md:hidden block '
      onClick={()=>setshowSidebar(!showSidebar)}>
        <CiMenuFries size={26}/>
      </div>
    </div>
  )
}

export default Navbar
