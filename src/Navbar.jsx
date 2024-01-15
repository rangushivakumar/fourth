import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useGlobal } from './GlobalContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret ,faBars, fas, faAslInterpreting, faTimes,faCartShopping} from "@fortawesome/free-solid-svg-icons";
 
function Navbar() {
  const [clicked,setClicked] = useState(false)
  const {signup_state} = useGlobal()
  return (
    <div className='navbar'>
      <div className='circle_container'>
      <div className='circle'></div>
      <h4>LIVIA</h4>
      </div>

      <div className='extranav'>  <ul className={clicked?"active":""}>
            <li><NavLink to= "/Home"  >HOME</NavLink></li>
            <li><NavLink to="/About"  >ABOUT</NavLink></li>
            <li><NavLink to="/Privatesales"  >PRIVATE SALE</NavLink></li>
            <li><NavLink to="/Roadmap"  >ROADMAP</NavLink></li>
            <li><NavLink to="/Contact" >CONTACT</NavLink></li>
            <FontAwesomeIcon id='cart' icon={faCartShopping} />
            {<li id='navlogin'><NavLink to="/Login" >LOGIN</NavLink></li>}
            <li id='navsignup'><NavLink to="/Signup" className="navsignup"  >SIGNUP</NavLink></li>
        </ul></div>
        <div id='mobile' onClick={()=>setClicked(prev =>!prev)}>
          <FontAwesomeIcon id="icon"icon={(clicked)?(faTimes):faBars}/>
          
        </div>
    </div>
  )
}

export default Navbar