import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/hero/hero.component'
import Signup from './components/signUp/signIn.component'
import Login from './components/login/login.component'
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes';
import AD from './components/adminDashboard/AD.component';
import UD from './components/userDashboard/UD.component';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/dashboard" exact component={UD} />
                <AdminRoute path="/adashboard" exact component={AD}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;