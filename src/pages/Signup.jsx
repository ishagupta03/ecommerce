import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  let nameref=useRef()
  let emailRef=useRef()
  let passwordRef=useRef()
  let navigate = useNavigate();

 

  let arr = JSON.parse(localStorage.getItem('Ecom'))  ||  []
  console.log(arr)


  const handlesubmit=(e)=>{
    e.preventDefault();
    let obj={
      name:nameref.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    if(obj.name && obj.email && obj.password){
      let find= arr.find((ele)=>ele.email===obj.email);
      if(find){
        return alert('user already registered')
      }
      else{
    arr.push(obj)
    localStorage.setItem('Ecom',JSON.stringify(arr))
    navigate('/login')
  }
 
}
else{
  alert('please fill all the fields')
}
}
  return (
    <div className='flex flex-col justify-center items-center     mt-10' >
      
      <form action='' className='border-black border-2 border-solid flex flex-col p-5 justify-center gap-2 '>
      <label htmlFor=''>Name</label>
      <input  type='text' className='border px-2 py-2 rounded' ref={nameref}/>
      <label htmlFor=''>Email</label>
      <input  type='email' className='border px-2 py-2 rounded' ref={emailRef}/>
      <label htmlFor=''>Password</label>
      <input  type='password' className='border px-2 py-2 rounded' ref={passwordRef}/>
      <button className='bg-green-600 rounded' onClick={handlesubmit}>SignUp</button>
      <p>Already Registered?<Link to="/login">login</Link></p>
</form>
    </div>
  )
}

export default Signup
