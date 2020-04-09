import React, { Component } from 'react';
import NewsItems from './NewsItems';
import dl from "./JSON/DataABC.json";

class News extends Component {
    render() {
        console.log(dl);
        return (
            < div >
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
                        {
                            dl.map((val, key) => {
                                return (
                                    <NewsItems
                                        key={key}
                                        tinId = {val.id}
                                        anh={val.anh}
                                        tieude={val.tieude}
                                        trichDan={val.trichDan}
                                    />
                                )
                            })
                        } 
                    </div>{/* End row */}
                </div>{/* End container */}
                {/* End tintuc */}
            </div >
        );
    }
}

export default News;