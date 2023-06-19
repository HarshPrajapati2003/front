import React, { createContext, useReducer } from 'react'
import "./components/Navbar"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import Errorpage from './components/Errorpage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Logout from './components/Logout'
import { initialState,reducer } from './Reducer/UserReducer'

// contextAPI
export const UserContext = createContext()

const Routing = ()=>{
  return(
    <>
    <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>

      <Route path="/about" element={<About />}>

      </Route>

      <Route path="/contact" element={<Contact />}>

      </Route>

      <Route path="/login" element={<Login />}>

      </Route>

      <Route path="/signup" element={<Signup />}>

      </Route>
      <Route path='*' element={<Errorpage />}>

      </Route>
      <Route path='/logout' element={<Logout />}>

      </Route>
    </Routes>
    </>
  )
}

const App=()=> {
  const [state,dispatch]= useReducer(reducer,initialState)
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
         <Navbar />
         <Routing />
    </UserContext.Provider>
    </>
  )
}

export default App

