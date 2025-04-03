import React, { useState } from 'react'
import UserContext from './UserContext';


const UserState = (  {children}) => {
  
let userData=JSON.parse(localStorage.getItem('Login'))
    const[user,setuser]=useState({
        email:userData?userData.email:'',
        login:userData ? userData.login : false


    });
  return (
    <UserContext.Provider value={{user, setuser}}>
    {children}
</UserContext.Provider>
  )
}

export default UserState
