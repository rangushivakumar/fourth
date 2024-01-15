import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from './GlobalContext'

function Rewards() {
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
      <h2>INSPIRED. MOTIVATED. INVOLVED.</h2>
{   <div className='signup_page_button_container'>
        <button className='signup_page_button1'>JOIN CLOUD SALE</button>
        <button onClick={handle} className='signup_page_button2' ><a href="/whitepaper.docx" download>DOWNLOAD WHITE PAPER</a></button>
      </div>}
    </div>
  </div>

  )
}

export default Rewards