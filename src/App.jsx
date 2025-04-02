import { useContext, useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from  './pages/Cart'
import Signup from   './pages/Signup'
import Login from  './pages/Login'
import Viewdetails from  './pages/Viewdetails'
import Navbar from './Components/Navbar'
import UserContext from './Context/UserContext'




function App() {
  let userStore = useContext(UserContext);
  console.log(userStore)
let login = userStore.user.login 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={login===true? <Home/> : <Navigate to={'/login'}/>} ></Route>
    <Route path='/cart' element={login===true? <Cart/> : <Navigate to={'/login'}/>} ></Route>
    <Route path='/sign'element={login===false? <Signup/> : <Navigate to={'/'}/>} ></Route>
    <Route path='/login'element={login===false? <Login/> : <Navigate to={'/'}/>} ></Route>
    <Route path='/view' element={login===true? <Viewdetails/> : <Navigate to={'/login'}/>} ></Route>

    </Routes>
   
     
    </BrowserRouter>
  )
}

export default App
