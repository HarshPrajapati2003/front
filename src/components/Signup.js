import React,{ useState } from 'react'
import styled from "styled-components";
import CallIcon from '@mui/icons-material/Call';
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import AssuredWorkloadSharpIcon from '@mui/icons-material/AssuredWorkloadSharp';
import MarkEmailReadSharpIcon from '@mui/icons-material/MarkEmailReadSharp';
import LockClockSharpIcon from '@mui/icons-material/LockClockSharp';
import CheckIcon from '@mui/icons-material/Check';
import { NavLink ,useNavigate } from 'react-router-dom';

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
    align-items:baseline;
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
    padding:2% 5% 5% 5%;
    /* background: url(https://i.imgur.com/BKyjjFa.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
}

.LoginPageInnerContainer .LoginFormContainer .logo {
    height: 60px;
    margin-bottom: 30px;
}

.LoginPageInnerContainer .LoginFormContainer .header {
    font-size: 32px;
    font-weight: 500;
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

/* .LoginPageInnerContainer .LoginFormContainer .OptionsContainer {
    display: flex;
    justify-content: space-between;
} */

.LoginFormContainer {
    display: flex;
    justify-content: center;
    align-items: center;
}

.LoginFormInnerContainer {
    width: 100%;
    max-width: 500px;
}

/* .LoginPageInnerContainer .LoginFormContainer .checkbox {
    width: 15px;
    height: 15px;
    margin: 0px;
    display: block;
    border: 1px solid #d6d7db;
} */

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

const Signup = () => {


    const navigate = useNavigate();
    
    // ================== main logic to store the data in Hooks Component ====================

    const [user,setUser]=useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""})

    
    const handleinput=(event)=>{
        // console.log(event)
        // name = event.target.name
        // value = event.target.value
        const { name, value } = event.target;    // this is 👍 short-cut

        setUser({...user,[name]:value})
    }
    // ================== Logic to store data in Database ==================

    const PostData = async (event)=>{
        event.preventDefault();
        const {name,email,phone,work,password,cpassword}=user
      
        const res = await fetch("/register",{
            method:"POST",
            headers :{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })
        })  
        console.log(user)
        const data = await res.json();
       
       
        if(!data){
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }else{
            window.alert("Registration Successfully")
            console.log("Registration Successfully")
            
            navigate('/login');
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
                <header className="header">Sign Up</header>
                {/* <header className="subHeader">Welcome to <b>animal planet!</b> Please Enter your Details</header> */}

                <form method='POST'>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><DriveFileRenameOutlineSharpIcon className="labelIcon"></DriveFileRenameOutlineSharpIcon><span>Enter Name*</span> </label>
                        <input onChange={handleinput} value={user.name} name='name' type="text" className="input" id="emailAddress" placeholder="Enter your Name"/>
                       
                    </div>
                    
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><CallIcon className="labelIcon"></CallIcon><span> Mobile No.*</span></label>
                        <input onChange={handleinput} value={user.phone} name='phone' type="number" className="input" id="emailAddress" placeholder="Enter your Mobile No."/>
                    </div>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><AssuredWorkloadSharpIcon className="labelIcon"></AssuredWorkloadSharpIcon><span>Your Work*</span></label>
                        <input onChange={handleinput} value={user.work} name='work' type="text" className="input" id="emailAddress" placeholder="Enter your Profession"/>
                    </div>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><MarkEmailReadSharpIcon className="labelIcon"></MarkEmailReadSharpIcon><span>Email
                                Address*</span></label>
                        <input onChange={handleinput} value={user.email} name='email' type="email" className="input" id="emailAddress" placeholder="Enter your Email Address"/>
                    </div>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><LockClockSharpIcon className="labelIcon"></LockClockSharpIcon><span>Password*</span></label>
                        <input onChange={handleinput} value={user.password} name='password' type="password" className="input" id="emailAddress" placeholder="Enter your Password"/>
                    </div>
                    <div className="inputContainer">
                        <label className="label" for="emailAddress"><CheckIcon className="labelIcon"></CheckIcon><span>Confirm Password*</span></label>
                        <input onChange={handleinput} value={user.cpassword} name='cpassword' type="password" className="input" id="emailAddress" placeholder="Enter your Password"/>
                    </div>
                    <div className="OptionsContainer">
                        {/* <div className="checkboxContainer">
                            <input type="checkbox" id="RememberMe" className="checkbox"/> <label for="RememberMe">Remember
                                me</label>
                        </div> */}
                        <NavLink to="/login" className="ForgotPasswordLink">Have You Alredy Register?</NavLink>
                    </div>
                    <button className="LoginButton" onClick={PostData}>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
</div>
    </Wrapper>
  )
}

export default Signup