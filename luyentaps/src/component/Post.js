import React, { Component } from 'react';
import data from './data.json';
import NewsRelated from './NewsRelated';



class Post extends Component {


    render() {
        var count = 0;
        return (
            <div>
                <header className="masthead" style={{ backgroundImage: 'url("img/post-bg.jpg")' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="post-heading">
                                    <h1>Man must explore, and this is exploration at its greatest</h1>
                                    <h2 className="subheading">Problems look mighty small from 150 miles up</h2>
                                    <span className="meta">Posted by
                        <a href=" https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Start Bootstrap</a>
                        on August 24, 2019</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {
                                data.map((val, key) => {
                                    if (val.id === this.props.match.params.id) {
                                        return (
                                            <div className="jumbotron text-center" key = {key}>
                                                <img src={val.anh} className="w-100" alt="" />
                                                <h1 className="display-3">{val.tieude}</h1>
                                                <p className="lead">{val.trichdan}</p>
                                                <hr className="my-2" />
                                                <p>{val.noidung}</p>
                                            </div>
                                        )
                                    }else{
                                        return true;
                                    }
                                })
                            }
                        </div>
                    </div>{/* End row */}
                    <div className="row">
                        {
                            data.map((val, key) => {
                                if (val.id !== this.props.match.params.id) {
                                    if (count < 3) {
                                        count++;
                                        return (
                                            <NewsRelated
                                                key={key}
                                                id={val.id}
                                                tieude={val.tieude}
                                                trichdan={val.trichdan}
                                                anh={val.anh}
                                            />
                                        )
                                    }else{
                                        return true;
                                    }
                                }else{
                                    return true;
                                }
                            })
                        }
                    </div>{/* End row */}
                </div>{/* End container */}
            </div>

        );
    }
}

export default Post;