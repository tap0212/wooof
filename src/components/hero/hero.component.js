import React from 'react'
import {makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import {Animated} from "react-animated-css";
import "./hero.styles.scss"
import Navbar from "../navbar/Navbar.component";
import heroImg from "../../assets/img/hero.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));
  
  export default function CenteredGrid() {
    const classes = useStyles();
  
    return (
        <div>
        <Navbar/>


      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <Paper className="heroLeft" id="heroLeft">
                <div className="hero-text-box">
                    <h1 className="hero-text">THE TRUE FRIEND   </h1>
                </div>
                <div className="quote-container">
                    <blockquote className="quote">
                    The Only Being On The Planet That Loves You More Than He Loves Himself
                    </blockquote>
                </div>
                <div className="btn-container">
                <Link to="/marketplace" className="btn" style={{ color: 'white', textDecoration: 'inherit'}}>Get Yours Now</Link>
                </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="heroRight">
                <div className="heroRightColor">
                    <img className="dogimg" src={heroImg} alt=""/>
                </div>
            </Paper>
          </Grid>  
        </Grid>
        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible="true">
        <div className="subtitle-container">
          <h3 className="subtitle">
          <Link to="about" style={{ color: 'white', textDecoration: 'inherit'}}>WhoWe?</Link>
          </h3>
        </div>
        </Animated>
      </div>
      </div>
    );
  }