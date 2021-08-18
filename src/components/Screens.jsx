import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Screens.css";
import ScreenA from "../views/ScreenA";
import ScreenB from "../views/ScreenB";
import ScreenC from "../views/ScreenC";

const Screens = props => 
{
    return (
        <main className="content" style={props.style}>
            <Switch>
                <Route path="/screenB">
                    <ScreenB/>
                </Route>
                <Route path="/screenC">
                    <ScreenC/>
                </Route>
                <Route exact path="/">
                    <ScreenA/>
                </Route>
            </Switch>
        </main>
    )
}

export default Screens;