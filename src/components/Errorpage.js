import React from 'react'
import { NavLink } from 'react-router-dom'
const Errorpage = () => {

    const css = {
        // backgroundColor:"#ff9800",
        height : "90vh",
        display : "flex",
        flexDirection:'column',
        justifyContent : "center",
        alignItems:"center"
    }
    const hcss = {
        padding:"1rem",
        color:"#2e1f7a"
    }
    const bcss = {
      
        color:"white",
        backgroundColor:"#fd7e14",
        borderRadius:"5px",
        textDecoration:"none",
        fontWeight:"600"
    }
    
  return (
    <>
    <div style={css}>
      <h1 className='text-center' style={hcss}>404 Error Page Not Found 😞</h1>
      <p className='text-center text-danger font-weight-bold' style={hcss}>Sorry ! The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
      <div  className="btn" style={bcss} ><NavLink to="/" style={bcss}>Go back</NavLink></div>
    </div>
    </>
  )
}

export default Errorpage
