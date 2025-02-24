import React, { Component } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';
import Contact from '../components/Contact';
import ComponentHome from '../components/Component_home';
class DieuHuongURL extends Component {
    render() {

        return (
            <Switch>
                <Route exact path='/home'>
                    <ComponentHome />
                </Route>
                <Route exact path='/'>
                    <ComponentHome />
                </Route>
                <Route exact path="/tin" component={News} />
                <Route exact path="/tin-tuc/:slug.:id.html" component={NewsDetail} />
                <Route exact path="/lien-he" component={Contact} />
            </Switch>
        );
    }
}

export default DieuHuongURL;