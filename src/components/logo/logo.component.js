import React from 'react'
import {Link} from 'react-router-dom'
import './logo.styles.css'
const Logo = () => {
    return(
        <div className="logo-container">
            <Link  className="link" to='/'><span className="logo">Wooof</span></Link>
        </div>
    )
}
export default Logo;