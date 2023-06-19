import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';
const Wrapper = styled.section`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
}

.container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
}

:root {
    /* //....... Color ........// */
    --primary-color: #ff3c78;
    --light-black: rgba(0, 0, 0, 0.89);
    --black: #000;
    --white: #fff;
    --grey: #aaa;
}
 
.contact {
    margin-top: 45px;
}

.phone_info,.email_info,.address_info{
  width: 300px;
    padding: 0.5rem;
    background-color: #2e1f7a;
    border-radius: 40px;
}
.cardiv{
  padding: 1rem 1rem 1rem 1rem;
  background-color: white;
    border-radius: 50%;
}
.header_info{
  flex-wrap: wrap;
}
.detaildiv{
  margin-left: 20px;
  color: white;
}


.form {
    display: flex;
    justify-content: space-between;
    margin: 80px 0;
}

.form .form-txt {
    flex-basis: 48%;
}

.form .form-txt h1 {
    font-weight: 600;
    color: #2e1f7a;
    font-size: 40px;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
   
}

.form .form-txt span {
    color: var(--light-black);
    font-size: 14px;
}

.form .form-txt h3 {
    font-size: 22px;
    font-weight: 600;
    margin: 15px 0;
    color: var(--light-black);
}

.form .form-txt p {
    color: var(--light-black);
    font-size: 14px;
}

.form .form-details {
    flex-basis: 48%;
}

.form .form-details input[type="text"],
.form .form-details input[type="email"],
.form .form-details input[type="Number"]{
    padding: 15px 20px;
    color: var(--black);
    outline: none;
    border: 1px solid black;
    margin: 35px 15px;
    font-size: 14px;
    width: 100%;
    margin: 18px 15px;
    font-weight: 600;
}

.form .form-details textarea {
    padding: 15px 20px;
    margin: 0 15px;
    color: var(--black);
    outline: none;
    border: 1px solid black;
    font-size: 14px;
    resize: none;
    width: 100%;
    margin: 18px 15px;
    font-weight: 600;
}

.form .form-details button {
    padding: 15px 25px;
    color: white;
    font-weight: 500;
    background-color: #2e1f7a;
    outline: none;
    border: none;
    margin: 15px;
    font-size: 14px;
    letter-spacing: 2px;
    cursor: pointer;
}

@media (max-width: 500px) {
    .form {
        display: flex;
        flex-direction: column;
    }
    .form .form-details button {
        margin-left: 0;
    }
    .form .form-details input[type="text"],
    .form .form-details input[type="email"],
    .form .form-details input[type="Number"],
    .form .form-details textarea {
        width: 100%;
        margin-left: 0;
    }
    .form .form-details input[type="text"] {
        margin-bottom: 0px;
    }
}

@media(min-width: 501px) and (max-width: 768px) {
    .form {
        display: flex;
        flex-direction: column;
    }
    .form .form-details button {
        margin-left: 0;
    }
    .form .form-details input[type="text"],
    .form .form-details input[type="email"],
    .form .form-details input[type="Number"],
    .form .form-details textarea {
        width: 100%;
        margin-left: 0;
    }
    .form .form-details input[type="text"] {
        margin-bottom: 0px;
    }
}
@media screen and (max-width:1000px){
  .phone_info,.email_info,.address_info{
  width: 100%;
  padding: 0.5rem;
}
.header_info {
  flex-direction: column;
}
}
`

const Contact = () => {

    // GET the data from backend to set value of name,email,phone in form by default

    const[userData,setUserData]=useState({name:"",email:"",phone:"",message:""});

    const UserContact = async()=>{
        try{
            const res = await fetch("/getdata",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            
            const data = await res.json();
            // console.log(data)

            setUserData({...userData,name:data.name,email:data.email,phone:data.phone})

            if(!data || res.status !==200){
                const err = new Error(res.error)
                throw err;
            }
        }catch(err){
            console.log(err)
        }
    } 

// onchange eventListener
    const handdleinputs=(event)=>{
        const name= event.target.name
        const value = event.target.value

        setUserData({...userData,[name]:value})
    }

// send the data to backend
const StoreData =async(event)=>{
    event.preventDefault()

    const {name,email,phone,message}=userData
    const res = await fetch("/contact",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email,phone,message})
    })
    
    const data = await res.json()

    if(!data || res.status !==201){
        console.log("Message Not Send")
    }
    else{
        alert("Message Send")
        console.log("Sent message Successfully!")
        setUserData({...userData,message:""}) //when message sent successfully message field will be empty 
    }
}

// when refresh the page it will be executed once 
    useEffect(()=>{
        UserContact()
    }, [])
    




  return (
    <Wrapper>
        <div className="contact container">
        <div className="header_info d-flex justify-content-between gap-2">
              <div className="phone_info d-flex align-items-center justify-content-start"><div className='cardiv'><PhoneAndroidIcon></PhoneAndroidIcon></div>
              <div className='detaildiv'>Phone <br />+91 8758866537</div>
              
              </div>
              <div className="email_info d-flex align-items-center justify-content-start"><div className='cardiv'><ContactMailIcon></ContactMailIcon></div>
              <div className='detaildiv'>Email <br />hrsdp2683@gmail.com</div></div>
              <div className="address_info d-flex align-items-center justify-content-start"><div className='cardiv'><BusinessSharpIcon></BusinessSharpIcon></div>
              <div className='detaildiv'>Address <br />Ahmedabad,Gujarat</div></div>
        </div>
        
            <form>
                <div className="form">
                    <div className="form-txt">
                        <h1>Contact Us</h1>
                        <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                        attention.</span>
                        <h3>USA</h3>
                        <p>195 E Parker Square Dr, Parker, CO 801<br/>+43 982-314-0958</p>
                        <h3>India</h3>
                        <p>HW95+C9C, Mhada Colony, Viman Nagar, Pune, Maharashtra<br/>411014</p>
                    </div>
                    <div className="form-details">
                    <form method='POST'>
                        <input value={userData.name}  onChange={handdleinputs} type="text" name="name" placeholder="Name" required/>
                        <input value={userData.email} onChange={handdleinputs}  type="email" name="email" placeholder="Email" required/>
                        <input value={userData.phone} onChange={handdleinputs}  type="number" name="phone" placeholder="Contact No." required/>
                        <textarea value={userData.message} onChange={handdleinputs} type="text" name="message" cols="52" rows="7" placeholder="Message" required></textarea>
                        <button onClick={StoreData}>SEND MESSAGE</button>
                    </form>
                    </div>
                </div>
            </form>
        </div>

    </Wrapper>
  )
}

export default Contact