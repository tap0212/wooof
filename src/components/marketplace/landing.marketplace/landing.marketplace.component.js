import React from 'react'
import Nav from '../../navbar/Navbar.component'
import './landing.marketplace.styles.scss'
function Landing() {
    return (
        <div>
            <Nav/>
            <h1 id="landingTitle">Choose One For You...</h1>
            <p className="description">
            We believe that a dog can lift our mood, change our day, keep us active and transform a house into a home. They offer freely what humans can spend a lifetime learning – the ability to love unconditionally. They save our lives in so many ways; we owe it to dogs to return this amazing loyalty.
            </p>
        </div>
    )
}

export default Landing
