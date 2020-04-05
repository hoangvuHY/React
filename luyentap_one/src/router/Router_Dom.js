import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from '../component/About';
import Home from '../component/Home';
import Contact from '../component/Contact';
import Post from '../component/Post';

class Router_Dom extends Component {
    render() {
        return (

            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/post">
                    <Post />
                </Route>

            </Switch>
        );
    }
}

export default Router_Dom;