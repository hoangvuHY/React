import React, { Component } from 'react';
import News_Items from './News_Items';

class News extends Component {
    render() {
        return (

            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto text-center">
                                <div className="header-content mx-auto text-center">
                                    <h1 className="mb-5"> Tin tuc</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* tintuc */}
                <div className="container mt-5">
                    <div className="row">

                        <News_Items />
                        <News_Items />
                        <News_Items />
                        <News_Items />
                        <News_Items />
                    </div>{/* End row */}
                </div>{/* End container */}
                {/* End tintuc */}
            </div>
        );
    }
}

export default News;