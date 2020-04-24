import React, {useState} from 'react'
import Nav from '../navbar/Navbar.component'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const SignUp = () => {
    
    return (
        <div className="container">
        <Nav/>
        <div>
            <h1 style={{color:"black"}}>.</h1>
        </div>
        <Grid container justify = "center">
            <h1>SignUp Now!</h1>
        </Grid>
        </div>
        
    )
}


export default SignUp