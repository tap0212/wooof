import React from "react"
import { Link, withRouter } from "react-router-dom";
import "./ham.scss"
import {isAutheticated,signout} from '../../auth/helper'
import Logo from './logo/logo.component'
const currentTab = (history, path) => {
	if (history.location.pathname === path) {
	  return { color: "#2ecc72" };
	} else {
	  return { color: "#FFFFFF" };
	}
  };



const Ham = ({history}) => {

	const myAccount = () => {
		if(isAutheticated() && isAutheticated().user.role === 0){
			return <li className="nav-element"><Link id="link"
			style={currentTab(history, "/dashboard")}
				to="/dashboard"
			>
			Your Account
			</Link></li>
		}
		else if(isAutheticated() && isAutheticated().user.role === 1){
			return <li className="nav-element"><Link id="link"
			style={currentTab(history, "/adashboard")}
				to="/adashboard"
			>
			Your Account
			</Link></li>
		}
		else{
			return <li className="nav-element"><Link id="link"
			style={currentTab(history, "/adashboard")}
				to="/adashboard"
			>
			Your Account
			</Link></li>
		}
	}

    return (
		<div>
        <div className="menu-wrap">
		<input type="checkbox" className="toggler"/>
		<div className="hamburger">
			<div></div>
		</div>
		<div className="menu">
			<div>
				<div>
					<ul>
						{myAccount()}
						<li className="nav-element"><Link id="link"
						style={currentTab(history, "/shop")}
						to='/marketplace'
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

						<Logo className="logo"/>
		</div>
    )
}

export default withRouter(Ham)