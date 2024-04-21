import React  from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {

  return (
    <>
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='Order' element={<PlaceOrder/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
