import React from "react"
import Link from '@material-ui/core/Link'
import "./ham.css"
const Ham = () => {
    return (
        <div class="menu-wrap">
		<input type="checkbox" class="toggler"/>
		<div class="hamburger">
			<div></div>
		</div>
		<div class="menu">
			<div>
				<div>
					<ul>
						<li className="nav-element"><Link 
						style={{color:"#66FCF1", textDecoration:"none", fontSize:"1em", fontWeight:"100", cursor:"pointer"}}
						>
						Account
						</Link></li>
						<li className="nav-element"><Link 
						style={{color:"#66FCF1", textDecoration:"none", fontSize:"1em", fontWeight:"100", cursor:"pointer"}}
						>
						Marketplace</Link></li>
						<li className="nav-element"><Link 
						style={{color:"#66FCF1", textDecoration:"none", fontSize:"1em", fontWeight:"100", cursor:"pointer"}}
						>
						About Us</Link></li>
						<li className="nav-element"><Link 
						style={{color:"#66FCF1", textDecoration:"none", fontSize:"1em", fontWeight:"100", cursor:"pointer"}}
						>
						Contact
						</Link></li>
					</ul>
				</div>
			</div>
		</div>
        </div>
    )
}

export default Ham;