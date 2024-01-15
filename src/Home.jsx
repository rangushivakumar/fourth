import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const {setRewards,rewards,signup_state} = useContext(GlobalContext)
  function handle(){
    setRewards(false)
  }
  return (
    <div>
{ rewards &&    <div className='Rewards'>
        <input type="text" placeholder='Name' className='inputx' value="0.0009" disabled/>
        <h4>To claim</h4>
        <NavLink to='/Signup'><button onClick={handle}>Claim</button></NavLink>
      </div>}
    <div className='signup_page'>
      <h1>CREATING A WORLD CONNECTED TO CRYPTOCURRENCY</h1>
      <h2>Inspired. Motivated. Involved.</h2>
{   <div className='signup_page_button_container'>
        <button className='signup_page_button1'>JOIN CROWDSALE</button>
        <a href="/whitepaper.docx" download className='signup_page_button2'><span ><FontAwesomeIcon id='downloadicon' icon={faCircleDown} /></span>DOWNLOAD WHITE PAPER</a>
      </div>}
    </div>
  </div>

  )
}
export default Home