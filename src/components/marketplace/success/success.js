import React , {useEffect, useRef} from 'react'
import lottie from 'lottie-web'
import {Link} from 'react-router-dom'
import './success.scss'
import Nav from '../../navbar/Navbar.component'
function Success() {
    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            animationData:require('./16429-thumbs-up.json')
        })
    }, [])
    return (
        <div>
            <Nav/>
            <div className="success">
            <div className="container" ref={container}></div>
            <h1 className="head3">Your Response Has Been Successfully Taken</h1>
           <div className="l2h-container">
           <Link className="l2h" to="/" >Go To Home</Link>
           </div>
            </div>
        </div>
    )
}

export default Success
