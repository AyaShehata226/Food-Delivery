import React, { useState } from 'react';
import './Navbar.css';
import { assets } from './../../assets/assets';
import { Link } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {
    const [menu , setMenu] = useState("Home");
    return (
        <>
        <div className='navbar'>
            <img src={assets.logo} alt='logo' className='logo'/>
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>{setMenu('Home')}} className={menu==="Home"?'active':""}>Home</Link>
                <a href='#explore-menu' onClick={()=>{setMenu('Menu')}} className={menu==="Menu"?'active':""}>Menu</a>
                <a href='#app-download' onClick={()=>{setMenu('Mobli-app')}} className={menu==="Mobli-app"?'active':""}>Mobli-app</a>
                <a href='#footer' onClick={()=>{setMenu('Contact us')}} className={menu==="Contact us"?'active':""}>Contact us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="search" /> 
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon}/>
                    <div className="dot"></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>sing in</button>
            </div>
        </div>
        </>
    );
}

export default Navbar;
