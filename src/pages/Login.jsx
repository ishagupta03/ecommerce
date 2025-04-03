import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Typed from 'typed.js';
import UserContext from '../Context/UserContext';


const Login = () => {
 
let userStore=useContext(UserContext)

  let emailRef=useRef();
  let passwordRef=useRef();
  // let navigate=useNavigate()
  let arr=JSON.parse(localStorage.getItem('Ecom'))||[]
  const handlelogin=(e)=>{
    e.preventDefault();
    let obj={
      email:emailRef.current.value,
      password:passwordRef.current.value
    }
    console.log(obj)
    let findarr=arr.find((ele)=>ele.email===obj.email)
   
            if(findarr){
                if(findarr.password===obj.password){
                  localStorage.setItem('Login',JSON.stringify({email:obj.email, login:true}))
                  userStore.setuser({email:obj.email, login:true})
                    // navigate('/')
                }
                else{
                    alert('wrong password')
                }
              

            }
            else{
                  alert('user not found please Signup')
                  
                }
    
  }
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Login', 'Signup', 'Portfolio'],
      typeSpeed: 100,
      backSpeed:50,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (

    <div className='flex flex-col justify-center items-center     mt-10' >
       <span ref={el} />
    <form action='' className='border-black border-2 border-solid flex flex-col p-5 justify-center gap-2 '>
    <label htmlFor=''>Email</label>
    <input  type='email' className='border px-2 py-2 rounded' ref={emailRef}/>
    <label htmlFor=''>Password</label>
    <input  type='password' className='border px-2 py-2 rounded'  ref={passwordRef}/>
    <button className='bg-green-600 rounded' onClick={handlelogin} >Login</button>
    <p>Not yet Registered?<Link to="/sign">SignUp</Link></p>
</form>
  </div>
  )
}

export default Login
