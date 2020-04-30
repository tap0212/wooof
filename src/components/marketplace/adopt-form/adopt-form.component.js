import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../../navbar/Navbar.component'
import {WhatsApp} from '@material-ui/icons';
import './adopt-form.styles.scss'
import { css } from "@emotion/core";
import {PropagateLoader} from "react-spinners";

const override = css`
display: block;
margin-left:50%;
`;


export default class  AdoptForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: '',
            loading:false
        }
    }

    onSubmit = () => {
        this.setState({loading:true})
        setTimeout(() => {
            this.setState({loading:false })
        },3000)
        
    }

     handleChange = name => event => {
        this.setState({ [name]: event.target.value})
    }

    Flash = () => {
        if(this.state.loading === true){
            return (
            <PropagateLoader
            css={override}
            size={22}
            color={"#66FCF1"}
            loading={this.state.loading}
          />)
        }
    }

render(){
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
                    <input type="number"
                    className="number"
                    placeholder="+91 9451XXXXXX"
                    required
                    onChange={this.handleChange("number")}
                    value={this.state.number}
                     />
                    
                    
                    <button onClick={this.onSubmit} className="submit">Submit</button>
                    {this.Flash()}
                    </form>
                </div>
                <p className="ps">P.S We process this really fast <br/>
                  By fast we mean really fast like <Link onFocus className="link" target="blank" to="https://en.wikipedia.org/wiki/Lockheed_SR-71_Blackbird">SR-71 Blackbird</Link>
                </p>
            </div>
        </div>
    )
}
}

