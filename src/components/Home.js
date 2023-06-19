import React, { useEffect, useState } from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
const Home = () => {

const [userName,setUserName]=useState('')
const [show,setShow]=useState(false)

const userHomePage=async()=>{
  try{
    const res = await fetch("/getdata",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await res.json()
    setUserName(data.name)
    setShow(true)
  }
  catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  userHomePage()
},[])

  const btncss = {
    backgroundColor:'#2e1f7a'
  }
const nav = {
  color: 'white',
  textDecoration:'none'
}

  return (
    <>
    <div className="home-page container">
      <div className="home-div d-flex justify-content-center align-items-center">
        <h4 className='pb-3'>Welcome</h4>
        <h1>{userName}</h1>
        <h3 className='text-center'>{show ? "Happy 😃, to see you back !":"We are the MERN Developer"}</h3>
        <button className='mt-4 btn text-white' style={btncss}><NavLink  to="/login" style={nav}>Let's Start</NavLink></button>
      </div>
    </div>
    
    </>
  )
}

export default Home
