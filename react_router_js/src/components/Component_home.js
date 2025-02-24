import React, { Component } from 'react';

class Component_home extends Component {
    render() {
        return (

            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-7 my-auto">
                                <div className="header-content mx-auto">
                                    <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new
                  mobile app, or anything else!</h1>
                                    <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.mddownload" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                                </div>
                            </div>
                            <div className="col-lg-5 my-auto">
                                <div className="device-container">
                                    <div className="device-mockup iphone6_plus portrait white">
                                        <div className="device">
                                            <div className="screen">
                                                {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                                <img src="img/demo-screen-1.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="button">
                                                {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="download bg-primary text-center" id="download">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <h2 className="section-heading">Discover what all the buzz is about!</h2>
                                <p>Our app is available on any mobile device! Download now to get started!</p>
                                <div className="badges">
                                    <a className="badge-link" href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"><img src="img/google-play-badge.svg" alt="" /></a>
                                    <a className="badge-link" href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"><img src="img/app-store-badge.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="features" id="features">
                    <div className="container">
                        <div className="section-heading text-center">
                            <h2>Unlimited Features, Unlimited Fun</h2>
                            <p className="text-muted">Check out what you can do with this app theme!</p>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-lg-4 my-auto">
                                <div className="device-container">
                                    <div className="device-mockup iphone6_plus portrait white">
                                        <div className="device">
                                            <div className="screen">
                                                {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                                                <img src="img/demo-screen-1.jpg" className="img-fluid" alt="" />
                                            </div>
                                            <div className="button">
                                                {/* You can hook the "home button" to some JavaScript events or just remove it */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 my-auto">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className="icon-screen-smartphone text-primary" />
                                                <h3>Device Mockups</h3>
                                                <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!
                      </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className="icon-camera text-primary" />
                                                <h3>Flexible Use</h3>
                                                <p className="text-muted">Put an image, video, animation, or anything else in the
                        screen!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className="icon-present text-primary" />
                                                <h3>Free to Use</h3>
                                                <p className="text-muted">As always, this theme is free to download and use for any
                        purpose!</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="feature-item">
                                                <i className="icon-lock-open text-primary" />
                                                <h3>Open Source</h3>
                                                <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!
                      </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta">
                    <div className="cta-content">
                        <div className="container">
                            <h2>Stop waiting.<br />Start building.</h2>
                            <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.mdcontact" className="btn btn-outline btn-xl js-scroll-trigger">Let's Get Started!</a>
                        </div>
                    </div>
                    <div className="overlay" />
                </section>
                <section className="contact bg-primary" id="contact">
                    <div className="container">
                        <h2>We
                       <i className="fas fa-heart" />
            new friends!</h2>
                        <ul className="list-inline list-social">
                            <li className="list-inline-item social-twitter">
                                <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li className="list-inline-item social-facebook">
                                <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li className="list-inline-item social-google-plus">
                                <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">
                                    <i className="fab fa-google-plus-g" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Component_home;