import React, { useState } from 'react';
import './Navbar.css';
import { assets } from './../../assets/assets';
const Navbar = () => {
    const [menu , setMenu] = useState("Home");
    return (
        <>
        <div className='navbar'>
            <img src={assets.logo} alt='logo' className='logo'/>
            <ul className='navbar-menu'>
                <li onClick={()=>{setMenu('Home')}} className={menu==="Home"?'active':""}>Home</li>
                <li onClick={()=>{setMenu('Menu')}} className={menu==="Menu"?'active':""}>Menu</li>
                <li onClick={()=>{setMenu('Mobli-app')}} className={menu==="Mobli-app"?'active':""}>Mobli-app</li>
                <li onClick={()=>{setMenu('Contact us')}} className={menu==="Contact us"?'active':""}>Contact us</li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="search" /> 
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon}/>
                    <div className="dot"></div>
                </div>
                <button >sing in</button>
            </div>
        </div>
        </>
    );
}

export default Navbar;
