import React from "react"
import { Link, withRouter ,Redirect} from "react-router-dom";
import "./ham.css"
import {isAutheticated,signout} from '../../auth/helper'

const currentTab = (history, path) => {
	if (history.location.pathname === path) {
	  return { color: "#2ecc72" };
	} else {
	  return { color: "#FFFFFF" };
	}
  };



const Ham = ({history}) => {

    return (
        <div className="menu-wrap">
		<input type="checkbox" className="toggler"/>
		<div className="hamburger">
			<div></div>
		</div>
		<div className="menu">
			<div>
				<div>
					<ul>
						<li className="nav-element"><Link id="link"
						style={currentTab(history, "/")}
							to="/login"
						>
						Your Account
						</Link></li>
						<li className="nav-element"><Link id="link"
						style={currentTab(history, "/shop")}
						to='/shop'
						>
						Marketplace</Link></li>
						<li className="nav-element"><Link  id="link"
						style={currentTab(history, "/about")}
						to='/about'
						>
						About Us</Link></li>
						<li className="nav-element"><Link id="link"
						style={currentTab(history, "/about")}
						to='/about'
						>
						Contact
						</Link></li>

						{isAutheticated() && 
							(
								<li className="nav-element"><Link id="link"
								onClick={() => {
									signout(() => {
										history.push("/login")
									})
								}}
								>
								Logout
								</Link></li>
							)
						}
						
					</ul>
				</div>
			</div>
		</div>
        </div>
    )
}

export default withRouter(Ham)