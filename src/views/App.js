import React from "react";
import Menu from "../components/Menu";
import Screens from "../components/Screens";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css";

const App = props => 
{
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Router>
                    <Menu />
                    <Screens />
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App;