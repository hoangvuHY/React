import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="http://google.com">Google</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav   mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://google.com">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://google.com" >Xem danh sach Notes</a>
                            </li>
                        </ul>
                    </div>
                </nav>{/* end menu tren */}

            </div>
        );
    }
}

export default Nav;