import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../../navbar/Navbar.component'
import Iframe from 'react-iframe'
import './adopt-form.styles.scss'


const  AdoptForm = () =>  {

    return (
        <div>
            <Nav/>
            <div className="container">
                <h1 className="head">We Thank You for Making A Tail Wag</h1>
                <h2 className="head2">We make this extremely simple <br/>
                    Just provide us with some of your details and we'll contact you shortly. 
                </h2>
                
                    

                    <div id="form-container">
                    <Iframe 
                        src="https://form.questionscout.com/5eaebc4156b669dcbb564e36"
                        className="form"
                    >

                    </Iframe>
                    </div>
                   
             
                <p className="ps">P.S We process this really fast <br/>
                  By fast we mean really fast like <a onFocus className="link" target="blank" href="https://en.wikipedia.org/wiki/Lockheed_SR-71_Blackbird">SR-71 Blackbird</a>
                </p>
            </div>
        </div>
    )
}

export default AdoptForm


