import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useContext } from 'react';
import { UserContext } from '../App';

const Wrapper = styled.section`
  * {
    margin: 0px;
    font-family: Rubik;
}

.LoginPageContainer {
   
    overflow: auto;
}

.LoginPageInnerContainer {
    display: flex;
    min-height: 100%;
}

.LoginPageInnerContainer .ImageContianer {
    /* width: 25%; */
    /* background-color: #e1dfec; */
    min-height: 100%;
    padding: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 7%;
}

.LoginPageInnerContainer .ImageContianer .GroupImage {
    width: 100%;
    display: block;
}

.LoginPageInnerContainer .LoginFormContainer {
    flex-grow: 2;
    background-color: white;
    min-height: 100%;
    padding: 5%;
    /* background: url(https://i.imgur.com/BKyjjFa.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
}

/* .LoginPageInnerContainer .LoginFormContainer .LogoContainer .logo {
    height: 60px;
    margin-bottom: 30px;
} */

.LoginPageInnerContainer .LoginFormContainer .header {
    font-size: 32px;
    font-weight: 500;
}

.LoginPageInnerContainer .LoginFormContainer .subHeader {
    color: #9aa4ad;
    margin-top: 5px;
    margin-bottom: 40px;
}

.LoginPageInnerContainer .LoginFormContainer .inputContainer {
    color: #3f3f45;
    margin: 20px 0px;
}

.LoginPageInnerContainer .LoginFormContainer .inputContainer .label {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-right: 7px;
    margin-bottom: 10px;
}

.LoginPageInnerContainer .LoginFormContainer .inputContainer .label .labelIcon {
    width: 20px;
    margin-right: 10px;
    display: block;
}

.LoginPageInnerContainer .LoginFormContainer .inputContainer .input {
    display: block;
    width: calc(100% - 20px);
    font-size: 15px;
    padding: 10px;
    border: 1px solid #d6d7db;
    border-radius: 5px;
    margin-top: 5px;
    outline: 0px !important;
}

.LoginPageInnerContainer .LoginFormContainer .OptionsContainer {
    display: flex;
    justify-content: space-between;
}

.LoginFormContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.LoginFormInnerContainer {
    max-width: 500px;
}

.LoginPageInnerContainer .LoginFormContainer .checkbox {
    width: 15px;
    height: 15px;
    margin: 0px;
    display: block;
    border: 1px solid #d6d7db;
}

.LoginPageInnerContainer .LoginFormContainer .checkboxContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.LoginPageInnerContainer .LoginFormContainer .checkboxContainer label {
    display: block;
    padding: 0px 5px;
    color: #9aa4ad;
}

.LoginPageInnerContainer .LoginFormContainer .ForgotPasswordLink {
    color: #e7483b;
    text-decoration: none;
}

.LoginFormContainer .LoginFormInnerContainer .LoginButton {
    margin-top: 30px;
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    color: white;
    background-color: #2e1f7a;
    border: 0px;
    outline: 0px;
    cursor: pointer;
}

.LoginFormContainer .LoginFormInnerContainer .LoginButton:active {
    background-color: #4520ff;
}


@media only screen and (max-width: 1200px) {
    .LoginPageInnerContainer .ImageContianer {
        width: 50%;
    }
}

@media only screen and (max-width: 800px) {
    .LoginPageInnerContainer .ImageContianer {
        display: none;
    }

    .LoginFormContainer {
        justify-content: center;
    }
}
/* .LoginPageContainer::-webkit-scrollbar {
    width: 5px;
}

.LoginPageContainer::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.LoginPageContainer::-webkit-scrollbar-thumb {
    background: #2e1f7a;
}

.LoginPageContainer::-webkit-scrollbar-thumb:hover {
    background: #4520ff;
} */
  `

const Login = () => {

    const {state,dispatch} = useContext(UserContext)

    const navigate = useNavigate();
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const loginUser = async(e)=>{
        e.preventDefault();
        const res = await fetch("/sign",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })

        const data = await res.json()

        if(res.status===400 || !data){
            window.alert("invalid Credential")
        }
        else{
            dispatch({type:"USER",payload:true})
            window.alert("Signin Successful")
            navigate("/")
        }
    }

  return (
    <Wrapper>
        <div className="LoginPageContainer">
    <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
            <img src="https://i.imgur.com/MYZd7of.png" className="GroupImage"/>
        </div>
        <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
                {/* <div className="LogoContainer">
                    <img src="https://www.pngkey.com/png/full/529-5291672_sample-logo-png-transparent-background.png" className="logo"/>
                </div> */}
                <header className="header">Log in</header>
                <header className="subHeader">Welcome to <b>animal planet!</b> Please Enter your Details</header>

                <form method='POST'>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" className="labelIcon"/><span>Email
                                Address*</span></label>
                        <input onChange={(e)=>setemail(e.target.value)} value={email} name='email' type="email" className="input" id="emailAddress" placeholder="Enter your Email Address"/>
                    </div>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png"
                                className="labelIcon"/><span>Password*</span></label>
                        <input onChange={(e)=>setpassword(e.target.value)} value={password} name='password' type="password" className="input" id="emailAddress" placeholder="Enter your Password"/>
                    </div>
                    <div className="OptionsContainer">
                        <div className="checkboxContainer">
                            <input type="checkbox" id="RememberMe" className="checkbox"/> <label for="RememberMe">Remember
                                me</label>
                        </div>
                        <NavLink to="/signup" className="ForgotPasswordLink">New Registration</NavLink>
                    </div>
                    <button type='submit' onClick={loginUser} className="LoginButton">Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </Wrapper>
  )
}


export default Login