import React, {useState} from 'react'
import Nav from '../navbar/Navbar.component'
import {Link} from 'react-router-dom'
import { Alert } from '@material-ui/lab';
import './signin.styles.scss'
import {signup} from '../../auth/helper'

const SignUp =  () =>  {

    const [values,setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success:false
    });
    const {name,email,password,error,success} = values;

    const handleChange = name => event => {
        setValues({...values,error:false, [name]: event.target.value})
    }


    const onSubmit = event => {
        event.preventDefault()
        setValues({...values, error: false})
        signup({name, email, password})
            .then(data => {
                if(data.error){
                    console.log("go")
                    setValues({...values, error:data.error, success: false})
                }
                else{
                    setValues({
                        ...values,
                        name: '',
                        email:'',
                        password:'',
                        error:'',
                        success:true
                    })
                    console.log("yo")
                }
            })
            .catch(console.log("error in signup"))

    }

    const Flash = () => {
        if(error){
            return  <Alert variant="outlined" severity="error"><span className="flash">{error}</span></Alert>
        }
        if(success===true){
            return  <Alert variant="outlined"  severity="success"><span className="flash">Account Created <Link className="span" to="/login">Login Now</Link></span></Alert>
        }
    }
    return (
        <div className="container">
        <Nav className="nav"/>
       <div className="form-box">
           <h1>Create A New Account</h1>
           {Flash()}
            <form>
                <div className="form-control">
                
                    <input onChange={handleChange("name")} value={name} type="text" placeholder="Enter Name" autoFocus  className="input"/>
                </div>
                <div className="form-control">
                   
                    <input onChange={handleChange("email")} value={email} type="email" placeholder="Enter Email"className="input"/>
                </div>
                <div className="form-control">
              
                    <input onChange={handleChange("password")} value={password} type="password" placeholder="Enter Password" className="input"/>
                </div>
               <button 
                onClick={onSubmit}
               className="button">Sign Up</button>
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



export default SignUp