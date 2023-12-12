







import "./TheForm.css"
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
function TheForm () {
   const [firstName, setFirstName]=useState("")
   const [lastName, setLastName]=useState("")
   const [middleName, setMiddleName]=useState("")
   const [age, setAge]=useState(0)
   const [gmail, setGmail]=useState("")
   const [address, setAdress]=useState("")
   const [phoneNumber, setPhoneNumber]=useState("")
   const [about, setAbout]=useState("")
   const [experiance, setExperiance]=useState("")
   const [education, setEducation]=useState("")

    return (
      <>
       <div className="form">
          <div className="formHeader">
            <button className="formBtn">
              <Link to="/">Back to home</Link>
              </button>
          </div>
          <hr />
          <div className="formMain">
            <div className="firstLine">
              <div className="img">
                <img src="" alt="upload photo" />
              </div>
              <div className="row">
                <div className="">
                  <p>First Name</p>
                  <input type="text" 
                          onChange={(event)=>{
                          setFirstName(event.target.value)
                         }}/>
                </div>
                <div className="">
                  <p>Middle Name</p>
                  <input type="text" 
                          onChange={(event)=>{
                            setMiddleName(event.target.value)
                          }}/>
                </div>
                <div className="">
                  <p>Last Name</p>
                  <input type="text" 
                         onChange={(event)=>{
                          setLastName(event.target.value)
                        }}
                   />
                </div>
              </div>
            </div>
            <div className="secondLine">
              <div className="colLeft">
              <div className="">
                  <p>Age</p>
                  <input type="text" 
                  onChange={(event)=>{
                    setAge(event.target.value)
                  }}/>
                </div>
                <div className="">
                  <p>Gmail</p>
                  <input type="text" 
                         onChange={(event)=>{
                          setGmail(event.target.value)
                        }}
                  />
                </div>
                <div className="">
                  <p>Address</p>
                  <input type="text" 
                         onChange={(event)=>{
                          setAdress(event.target.value)
                        }}
                  />
                </div>
                <div className="">
                  <p>Phone Number</p>
                  <input type="text" 
                         onChange={(event)=>{
                          setPhoneNumber(event.target.value)
                        }}
                  />
                </div>
              </div>
              <div className="colCenter">
                <p>About</p>
                <textarea name="" id="" cols="30" rows="10"
                          onChange={(event)=>{
                            setAbout(event.target.value)
                          }}
                 ></textarea>
                <p>Experiance</p>
                <textarea name="" id="" cols="30" rows="10"
                          onChange={(event)=>{
                            setExperiance(event.target.value)
                          }}
                ></textarea>
              </div>
              <div className="colRight">
                <p>Education</p>
                <textarea name="" id="" cols="30" rows="10"
                          onChange={(event)=>{
                            setEducation(event.target.value)
                          }}
                ></textarea>
                <p>Experiance</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
          </div>
          <button className="downloadBtn">Download CV</button>
       </div>
      </>
    )
  }   


export default TheForm