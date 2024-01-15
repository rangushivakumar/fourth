import React from 'react'
import Navbar from './Navbar'
import { Outlet ,useLocation} from 'react-router-dom'
import { GlobalContext} from './GlobalContext'
import { useState } from 'react'

function Layout() {
  const [signup_state,setSign] = React.useState(false)
  const [rewards,setRewards] = React.useState(true)
  const [popup, setPopup] = useState(true)

  return (
    <GlobalContext.Provider value={{signup_state,setSign,rewards,setRewards,popup,setPopup}}>
        <Navbar/>
        <Outlet/>
    </GlobalContext.Provider>
   
  )
}

export default Layout