import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from  './pages/Cart'
import Signup from   './pages/Signup'
import Login from  './pages/Login'
import Viewdetails from  './pages/Viewdetails'
import Navbar from './Components/Navbar'




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/cart' element={<Cart/>} ></Route>
    <Route path='/sign' element={<Signup/>} ></Route>
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/view' element={<Viewdetails/>} ></Route>

    </Routes>
   
     
    </BrowserRouter>
  )
}

export default App
