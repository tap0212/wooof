import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../../navbar/Navbar.component'
import {WhatsApp} from '@material-ui/icons';
import './adopt-form.styles.scss'


const  AdoptForm = () =>  {

    return (
        <div>
            <Nav/>
            <div className="container">
                <h1 className="head">We Thank You for Making A Tail Wag</h1>
                <h2 className="head2">We make this extremely simple <br/>
                    Just provide us with your Whatsapp number. 
                </h2>
                <div className="number-container">
                    <form>
                    <span> <WhatsApp className="icon" /></span>
                    <input type="tel"
                    className="number"
                    pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}"
                    placeholder="+91 9451-XXX-XXX"
                    required
                     />
                    
                    
                    <Link  to="/success"  className="submit">Submit</Link>
                   
                    </form>
                   
                </div>
                <p className="ps">P.S We process this really fast <br/>
                  By fast we mean really fast like <Link onFocus className="link" target="blank" to="https://en.wikipedia.org/wiki/Lockheed_SR-71_Blackbird">SR-71 Blackbird</Link>
                </p>
            </div>
        </div>
    )
}

export default AdoptForm


