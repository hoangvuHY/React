import React, { Component } from 'react';
import NewItem from './NewItem';
import data from './data.json';
class About extends Component {

    render() {
        return (
            <div>
                <header className="masthead" style={{ backgroundImage: 'url("img/about-bg.jpg")' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="page-heading">
                                    <h1>About Me</h1>
                                    <span className="subheading">This is what I do.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        {
                            data.map((value, key) => {
                                return (
                                    <NewItem 
                                        key = {key}
                                        id = {value.id}
                                        anh = {value.anh}
                                        tieude={value.tieude}
                                        trichdan = {value.trichdan}
                                    />
                                )
                            })
                        }
                    </div>{/* End row */}
                </div>{/* End container */}
            </div>
        );
    }
}

export default About;