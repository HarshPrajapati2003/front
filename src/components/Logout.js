import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import { useContext } from 'react'

const Logout = () => {

  const {state,dispatch}=useContext(UserContext)
  
  const navigate = useNavigate()
  // Note : useEffect can not support async await

  useEffect(()=>{
    fetch("/logout",{
      method:"GET",
      headers:{
         Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    }).then((res)=>{
      navigate("/login")
      dispatch({type:"USER",payload:false})
      if(res.status !== 200){
        const error = new Error(res.error)
        throw error
      }
    }).catch((err)=>{
      console.log(err)
    })
  })

  return (
    <>
      <h1>logout</h1>
    </>
  )
}

export default Logout
