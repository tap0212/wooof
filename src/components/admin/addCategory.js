import React,{useState} from 'react'
import Nav from '../navbar/Navbar.component'
import {Link} from 'react-router-dom'
import './createCategory.css'
import {Alert} from '@material-ui/lab'
import { isAutheticated } from '../../auth/helper'
import {createCategory} from "./helper/adminAPICalss"
import { css } from "@emotion/core";
import {PropagateLoader} from "react-spinners";
const AddCategory = () => {
    const override = css`
     display: block;
     margin-left:50%;
    `;

    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const {user, token} = isAutheticated()

    const goBack = () => {
        return(
            <div>
                <Link className="back" to="/adashboard">Back To Dashboard</Link>
            </div>
        )
    }

    const handleChange = event => {
        setError("");
        setName(event.target.value);
      };
    
      const onSubmit = event => {
        event.preventDefault();
        setError("");
        setSuccess(false);
        setLoading(true)
    
        //backend request fired
        createCategory(user._id, token, { name }).then(data => {
          if (data.error) {
            setError(data.error);
            setLoading(false)
            setName("")
          } else {
            setError("");
            setSuccess(true);
            setName("");
          }
        });
      };

      const Flash = () => {
        if(error){
            return  <Alert variant="outlined" severity="error"><span className="flash">{error}</span></Alert>
        }
        if(success===true){
            return  <Alert variant="outlined"  severity="success"><span className="flash">Account Created <Link className="span" to="/login">Login Now</Link></span></Alert>
        }
        if(loading === true){
            return <PropagateLoader
            css={override}
            size={25}
            color={"#66FCF1"}
            loading={loading}
          />
        }
    }

      

    const categoryForm = () => {
        return(
            <div className="form-container">
            <form className="form" >
                <label className="label" htmlFor="category">
                    Enter Category Name
                </label>
                <input onChange={handleChange} value={name} className="inputt" required type="text" autoFocus placeholder="Enter Category Name"/>

                <button onClick={onSubmit} className="submitButton">Create</button>
            </form>
        </div>
        )
    }

    return (
        <div>
        <Nav/>
            <h1 className="cat-head">Create A New Category</h1>
            {Flash()}
            {categoryForm()}
            {goBack()}
        </div>
    )
}

export default AddCategory
