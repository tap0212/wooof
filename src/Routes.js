import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/hero/hero.component'
import Signup from './components/authComponents/signUp/signIn.component'
import Login from './components/authComponents/login/login.component'
import PrivateRoute from './auth/helper/PrivateRoutes';
import Landing from './components/marketplace/landing.marketplace/landing.marketplace.component'
import AdoptForm from './components/marketplace/adopt-form/adopt-form.component';
import About from './components/about/about';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/about" exact component={About} />
                <PrivateRoute path="/adopt" exact component={AdoptForm} />
                <Route path="/marketplace" exact component={Landing}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;