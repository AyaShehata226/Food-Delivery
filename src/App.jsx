import React, { useContext, useEffect, useState }  from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Payment from './components/Payment/Payment'
import { StoreContext } from './context/StoreContext'

function App() {
  // const [showLogin , setShowLogin] = useState();
  const {showLogin} = useContext(StoreContext)
  useEffect(()=>{
  },[])
  return (
    <>
    {showLogin?<Login/>:<></>}
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='order' element={<PlaceOrder/>}/>
      <Route path='/payment' element={<Payment/>}/>
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
