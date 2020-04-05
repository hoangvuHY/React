import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';
import Contact from '../components/Contact';
import Component_home from '../components/Component_home';
class DieuHuongURL extends Component {
    render() {
        return (
            <Switch>

                <Route exact path="/home">
                    <Component_home />
                </Route>
                <Route exact path="/tin">
                    <News />
                </Route>
                <Route exact path="/tin-chi-tiet">
                    <NewsDetail />
                </Route>
                <Route exact path="/lien-he">
                    <Contact />
                </Route>

            </Switch>
        );
    }
}

export default DieuHuongURL;