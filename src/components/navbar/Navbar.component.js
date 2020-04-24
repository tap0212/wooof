import React from 'react'
import "./Navbar.styles.css"
import Link from "@material-ui/core/Link"
import Ham from "./ham-component"
const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="haburger left">
                <Ham/>
            </div>
        </div>
    )
}
export default Navbar