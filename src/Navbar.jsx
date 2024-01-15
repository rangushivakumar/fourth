import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useGlobal } from './GlobalContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret ,faBars, fas, faAslInterpreting, faTimes} from "@fortawesome/free-solid-svg-icons";
 
function Navbar() {
  const x = "/"
  const y = useLocation()
  const [clicked,setClicked] = useState(false)
  const {signup_state} = useGlobal()
  return (
    <div className='navbar'>
      <div className='circle_container'>
      <div className='circle'></div>
      <h4>OLIV</h4>
      </div>

      <div className='extranav'>  <ul className={clicked?"active":""}>
            <li><NavLink to= "/Home"  >HOME</NavLink></li>
            <li><NavLink to="/About"  >ABOUT</NavLink></li>
            <li><NavLink to="/Privatesales"  >PRIVATE SALE</NavLink></li>
            <li><NavLink to="/Roadmap"  >ROADMAP</NavLink></li>
            <li><NavLink to="/Contact" >CONTACT</NavLink></li>
            {!signup_state&&<li><NavLink to="/Login" >LOGIN</NavLink></li>}
            {!signup_state&&<li><NavLink to="/Signup" className={x==y.pathname ? "active":""} >SIGNUP</NavLink></li>}
            {signup_state&&<li><NavLink to="">USER</NavLink></li>}
        </ul></div>
        <div id='mobile' onClick={()=>setClicked(prev =>!prev)}>
          <FontAwesomeIcon id="icon"icon={(clicked)?(faTimes):faBars}/>
          
        </div>
    </div>
  )
}

export default Navbar