import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/hero/hero.component'
import Signup from './components/signUp/signIn.component'
import Login from './components/login/login.component'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;