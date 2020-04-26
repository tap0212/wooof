import React, {useState} from 'react'
import Nav from '../navbar/Navbar.component'
import {Link} from 'react-router-dom'
import { FormControl,InputLabel,Input,TextField } from '@material-ui/core';
import './signin.styles.scss'


class SignUp extends React.Component {
    
render(){
    return (
        <div className="container">
        <Nav className="nav"/>
       <div className="form-box">
           <h1>Create A New Account</h1>
            <form>
                <div className="form-control">
                
                    <input type="text" placeholder="Enter Name" autoFocus className="input"/>
                </div>
                <div className="form-control">
                   
                    <input type="email" placeholder="Enter Email"className="input"/>
                </div>
                <div className="form-control">
              
                    <input type="password" placeholder="Enter Password" className="input"/>
                </div>
               <button className="button">Sign Up</button>
            </form>
            <h2>Already a user? 
            <Link
                className="span"
                to="/login"
            > Login</Link></h2>
       </div>

       
        </div>

        
        
    )
}
}


export default SignUp