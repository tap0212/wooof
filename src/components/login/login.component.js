import React, {useState} from 'react'
import Nav from '../navbar/Navbar.component'
import {Link} from 'react-router-dom'
import { FormControl,InputLabel,Input,TextField } from '@material-ui/core';
import './login.styles.scss'


class LogIn extends React.Component {
    
render(){
    return (
        <div className="container">
        <Nav/>
       <div className="form-box">
           <h1>Login Now</h1>
            <form>
                <div className="form-control">
                   
                    <input type="email" placeholder="Enter Email"className="input"/>
                </div>
                <div className="form-control">
              
                    <input type="password" placeholder="Enter Password" className="input"/>
                </div>
               <button className="button">LogIn</button>
            </form>
            <h2>Not a user yet? 
            <Link className="span" to="/signup">
              <span> Signup Now</span> 
            </Link>
            </h2>
       </div>

       
        </div>

        
        
    )
}
}


export default LogIn