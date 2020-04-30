import React, {useState} from 'react'
import Nav from '../../navbar/Navbar.component'
import {Link,Redirect} from 'react-router-dom'
import {Alert} from '@material-ui/lab'
import './login.styles.scss'
import { signin, authenticate,isAutheticated } from '../../../auth/helper';
import { css } from "@emotion/core";
import {PropagateLoader} from "react-spinners";

const LogIn = () => {

    const override = css`
     display: block;
     margin-left:50%;
    `;

    const [values, setValues] = useState({
        email:'',
        password:'',
        error:'',
        loading:false,
        didRedirect:false
    })
    const {email, password, error, loading,didRedirect} = values;



    const handleChange = name => event => {
        setValues({...values,error:false, [name]: event.target.value})
    }

    const Flash = () => {
        if(error){
            return  <Alert variant="outlined" severity="error"><span className="flash">{error}</span></Alert>
        }
        if(loading === true){
            return <PropagateLoader
            css={override}
            size={22}
            color={"#66FCF1"}
            loading={loading}
          />
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({...values, error:'', loading:true});
        signin({email,password})
            .then(data => {
                if(data.error){
                    setValues({...values, error:data.error, loading:false})
                }
                else{
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                }
            }).catch(console.log("error in login"))
    }

    const performRedirect = () => {
        if(didRedirect){
            
                return <Redirect to='/dashboard'></Redirect>
            
        }
    }

    return (
        <div className="container">
        <Nav/>
       <div className="form-box">
           <h1>Login Now</h1>
           {Flash()}
            <form>
                <div className="form-control"> 
                    <input onChange={handleChange("email")} value={email} type="email" placeholder="Enter Email"className="input"/>
                </div>

                <div className="form-control">
                    <input onChange={handleChange("password")} value={password} type="password" placeholder="Enter Password" className="input"/>
                </div>
               <button onClick={onSubmit} className="button">LogIn</button>
            </form>
            <h2>Not a user yet? 
            <Link className="span" to="/signup">
              <span> Signup Now</span> 
            </Link>
            </h2>
            {performRedirect()}
       </div>

       
        </div>

        
        
    )
}


export default LogIn