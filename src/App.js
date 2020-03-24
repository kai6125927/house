import React, { Component } from 'react'
import {HashRouter,Switch,Route} from "react-router-dom"
import Nav from "./pages/Nav"
import Login from "./pages/Login"
import Reg from "./pages/Reg"
import Citylist from "./pages/Citylist"
import Mappage from "./pages/Mappage"
import Search from "./pages/Search"


import Ettor404 from "./pages/Ettor404"
import "./assets/styles/reset.css"

export default class App extends Component {
    render() {
        return (
            <div style={{height:"100%"}}>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Nav}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/reg" component={Reg}></Route>
                        <Route path="/citylist" component={Citylist}></Route>
                        <Route path="/mappage" component={Mappage}></Route>
                        <Route path="/search" component={Search}></Route>
                        <Route component={Ettor404}></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
