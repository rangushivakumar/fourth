import React from 'react'
import { useGlobal } from './GlobalContext'
import { NavLink } from 'react-router-dom'

function Login() {
  const {signup_state,setSign,popup,setPopup} = useGlobal()
  
  function handleClick(){
    setPopup(true)
  }
  function handle(){
    setSign(true)
    setPopup(false)
  }
  return (
<div>
  {popup && 
    <div className='signup'>
      <input type="text" placeholder='Name' className='inputx'/>
      <input type="text" placeholder='Passkey' className='inputy'/>
      <NavLink to="/Home"><button onClick={handle} >Login</button></NavLink>
  </div>}
  <div className='signup_page'>
    <h1>CREATING A WORLD CONNECTED TO CRYPTOCURRENCY</h1>
    <h2>INSPIRED. MOTIVATED. INVOLVED.</h2>
{<div className='signup_page_button_container'>
      <button onClick={handleClick} className='signup_page_button1'>JOIN NOW</button>
      <button onClick={handleClick} className='signup_page_button2' >DOWNLOAD WHITE PAPER</button>
    </div>}
  </div>
</div>
  )
}

export default Login