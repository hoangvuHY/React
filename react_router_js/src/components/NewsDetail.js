import React, { Component } from 'react';

class NewsDetail extends Component {
    render() {
        return (

            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto text-center">
                                <div className="header-content mx-auto text-center">
                                    <h1 className="mb-5"> Chi tiet tin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* tintuc */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <img src="http://placehold.it/1900x600" alt="" className="img-fluid" />
                        <p className="lead">Jumbo helper text</p>
                        <hr className="my-2" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio assumenda, expedita maiores labore fuga
                        nulla impedit iste recusandae mollitia neque consectetur iusto asperiores voluptate modi consequuntur
            cum vitae voluptatum corrupti!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio assumenda, expedita maiores labore fuga
                        nulla impedit iste recusandae mollitia neque consectetur iusto asperiores voluptate modi consequuntur
            cum vitae voluptatum corrupti!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio assumenda, expedita maiores labore fuga
                        nulla impedit iste recusandae mollitia neque consectetur iusto asperiores voluptate modi consequuntur
            cum vitae voluptatum corrupti!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio assumenda, expedita maiores labore fuga
                        nulla impedit iste recusandae mollitia neque consectetur iusto asperiores voluptate modi consequuntur
            cum vitae voluptatum corrupti!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio assumenda, expedita maiores labore fuga
                        nulla impedit iste recusandae mollitia neque consectetur iusto asperiores voluptate modi consequuntur
            cum vitae voluptatum corrupti!</p>
                    </div>
                </div>
                <div className="container">
                    <h4 className="card-title text-center">Tin lien quan</h4>
                    <div className="row">
                        <div className="col-12">
                            <div className="card-deck">
                                <div className="card">
                                    <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x400" alt="" /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x400" alt="" /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-deck">
                                <div className="card">
                                    <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x400" alt="" /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <a href="/tin-chi-tiet"><img className="card-img-top" src="http://placehold.it/500x400" alt="" /></a>
                                    <div className="card-body">
                                        <h4 className="card-title">Title</h4>
                                        <p className="card-text">Text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End container */}
                {/* End tintuc */}
            </div>
        );
    }
}

export default NewsDetail;