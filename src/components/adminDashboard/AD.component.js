import React from 'react'
import Nav from '../navbar/Navbar.component'
import { isAutheticated } from '../../auth/helper'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import './AD.styles.scss'

const AD = () => {
    const {
        user: { name, email, role }
      } = isAutheticated();

      const adminLeftSide = () => {
        return (
          <div className="options-container">
            <h4 className="header-left">Navigation</h4>
            <ul className="list">
              <li className="list-elements">
                <Link to="/admin/create/category" className="link">
                  Create Categories
                </Link>
              </li>
              <li className="list-elements">
                <Link to="/admin/create/product" className="link">
                  Create Product
                </Link>
              </li>
              <li className="list-elements">
                <Link to="/admin/products" className="link">
                  Manage Products
                </Link>
              </li>
              <li className="list-elements">
                <Link to="/admin/orders" className="link">
                  Manage Orders
                </Link>
              </li>
            </ul>
          </div>
        );
      };

      const adminRightSide = () => {
        return (
          <div className="info-container">
            <h4 className="header-right">Admin Information</h4>
            <ul className="list">
              <li className="list-elements">
                <span className="link">Name:</span> <span className="link">{name}</span>
              </li>
              <li className="list-elements">
                <span className="link">Email:</span> <span className="link">{email}</span>
              </li>
    
              <li className="list-elements">
                <span className="link">Admin Area</span>
              </li>
            </ul>
          </div>
        );
      };


    return(
        <div>
            <Nav/>
            <h1 className="title">Admin Dashboard</h1>
             <div className="root">
                 <Grid container spacing={2}>
                 <Grid item xs={12} sm={3}>
                    {adminLeftSide()}
                 </Grid>
                 <Grid item xs={12} sm={9}>
                    {adminRightSide()}
                 </Grid>

                 </Grid>
             </div>
         </div>
    )
}

export default AD;