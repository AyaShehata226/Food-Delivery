import React, { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import { HiMiniXMark } from "react-icons/hi2";
const Login = ({setShowLogin}) => {
    const [currentState , setCurrentState] = useState("Login");
    return (
        <div className='login'>
            <form className='login-container'>
                <div className='login-title'>
                    <h2>{currentState}</h2>
\                    <HiMiniXMark className='icon' onClick={()=>setShowLogin(false)}/>
                    
                </div>
                <div className='login-inputs'>
                    {currentState==="Login"?<></>:<input type="text" placeholder='Your Name'  required/>}
                    <input type="email" placeholder='Your E-mail'  required/>
                    <input type="password" placeholder='Password'  required/>
                </div>
                <button>{currentState==="Sing Up"?"Create account" : "Login"}</button>
                <div className='login-condition'>
                    <input type='checkbox' required/>
                    <p>By continuing , i agree to the terms of use & Privacy policy.</p>
                </div>
                {
                    currentState==="Login"
                    ?<p>Create a new account? <span onClick={()=>setCurrentState("Sing UP")}>Click here</span></p>
                    :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    );
}

export default Login;
