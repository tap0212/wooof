import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/hero/hero.component'
import Signup from './components/signUp/signIn.component'
import Login from './components/login/login.component'
import {AdminRoute} from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes';
//import user dashboard
//import admin dashboard
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                {/* <PrivateRoute path="/user/dashboard"/> */}
                {/* <AdminRoute component admin dashboard */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;