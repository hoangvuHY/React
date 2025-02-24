import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="masthead" style={{ backgroundImage: 'url("img/home-bg.jpg")' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="site-heading">
                                    <h1>Clean Blog</h1>
                                    <span className="subheading">A Blog Theme by Start Bootstrap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        Man must explore, and this is exploration at its greatest
              </h2>
                                    <h3 className="post-subtitle">
                                        Problems look mighty small from 150 miles up
              </h3>
                                </a>
                                <p className="post-meta">Posted by
              <a href="  https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Start Bootstrap</a>
              on September 24, 2019</p>
                            </div>
                            <hr />
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
              </h2>
                                </a>
                                <p className="post-meta">Posted by
              <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Start Bootstrap</a>
              on September 18, 2019</p>
                            </div>
                            <hr />
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        Science has not yet mastered prophecy
              </h2>
                                    <h3 className="post-subtitle">
                                        We predict too much for the next year and yet far too little for the next ten.
              </h3>
                                </a>
                                <p className="post-meta">Posted by
              <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Start Bootstrap</a>
              on August 24, 2019</p>
                            </div>
                            <hr />
                            <div className="post-preview">
                                <a href="post.html">
                                    <h2 className="post-title">
                                        Failure is not an option
              </h2>
                                    <h3 className="post-subtitle">
                                        Many say exploration is part of our destiny, but it’s actually our duty to future generations.
              </h3>
                                </a>
                                <p className="post-meta">Posted by
              <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Start Bootstrap</a>
              on July 8, 2019</p>
                            </div>
                            <hr />
                            {/* Pager */}
                            <div className="clearfix">
                                <a className="btn btn-primary float-right" href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Older Posts →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;