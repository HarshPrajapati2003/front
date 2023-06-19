import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  const callAboutPage=async()=>{
    try{

      const res = await fetch("/about",{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-type":"application/json"
        },
        credentials:"include"
      })
      // console.log("data")
      const data = await res.json();
      // console.log(data)
      if(!res.status===200 || !data){
        const error = new Error(res.error);
        throw error
      }

    }catch(err){
      console.log(err)
      navigate("/login")
    }
  }

  useEffect(()=>{
    callAboutPage();
  },[])

  return (
    <div>
        <p>Welcome</p>
        <h1>About</h1>
    </div>
  )
}

export default About