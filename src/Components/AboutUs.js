import React, { Component } from 'react'
import User
 from './User'
 import UserClass from './UserClass'

 class AboutUs extends Component{

  constructor(props)
  {
    super(props);
    console.log("Parent constructor")
  }

  componentDidMount()
  {
    // console.log("Parent comp didMount");
  }


  render()
  {

    // console.log("Parrnt Component rendered")
    return (
      <>
      
      <h1>About Us</h1>
      <h2>Contact Us</h2>
      <h3>below are the details</h3>
      <User name={"Shakunthala"} place={"Gudalur"}/>
      {/* <UserClass name={"class 1"}/>
      <UserClass name={"class 2"}/> */
      }
      <UserClass/>
      </>
      
    )
  }
 }

export default AboutUs