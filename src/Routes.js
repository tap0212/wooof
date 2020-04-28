import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/hero/hero.component'
import Signup from './components/signUp/signIn.component'
import Login from './components/login/login.component'
import AdminRoute from './auth/helper/AdminRoutes'
import PrivateRoute from './auth/helper/PrivateRoutes';
import AD from './components/admin/adminDashboard/AD.component';
import UD from './components/userDashboard/UD.component';
import AddCategory from './components/admin/addCategory';
import Landing from './components/marketplace/landing.marketplace/landing.marketplace.component'
import Item from './components/marketplace/item.component/item.component';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/dashboard" exact component={UD} />
                <AdminRoute path="/adashboard" exact component={AD}/>
                <AdminRoute path="/admin/create/category" exact component={AddCategory}/>
                <Route path="/marketplace" exact component={Landing}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;