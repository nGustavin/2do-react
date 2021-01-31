import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Landing from './pages/Landing'
import Home from './pages/Home'

function Routes() { 
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/home" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes