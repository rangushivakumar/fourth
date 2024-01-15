import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import About from './About'
import Contact from './Contact'
import Private from './Private'
import Login from './Login'
import Roadmap from './Roadmap'
import Rewards from './Rewards'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>} >
    <Route path='' element={<Rewards/>} ></Route>
    <Route path='/Signup' element={<Signup />}></Route>
    <Route path='/Home' element={<Home />} ></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Roadmap' element={<Roadmap/>}></Route>
    <Route path='/About' element={<About/>} ></Route>
    <Route path='/Privatesales' element={<Private/>} ></Route>
    <Route path='/Contact' element={<Contact/>} ></Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
)
