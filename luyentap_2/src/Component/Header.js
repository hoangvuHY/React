import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (

            <div className="jumbotron text-center">
                <h1 className="display-3">Project Quản Lý Thành Viên</h1>
                <p className="lead">Dữ liệu .json</p>
                <hr className="my-2" />
            </div>

        );
    }
}

export default Header;