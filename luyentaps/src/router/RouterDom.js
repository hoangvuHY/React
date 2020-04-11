import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from '../component/Home';
import About from '../component/About';
import Post from '../component/Post';
import Contact from '../component/Contact';
class RouterDom extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/post/:slug.:id.html" component={Post} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        );
    }
}

export default RouterDom;