import React, { Component } from 'react';

class HeaderTitle extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Danh sach san pham</h1>
                <p className="lead">Sử dụng react js lấy dữ liệu từ node js</p>
                <hr className="my-2" />
            </div>

        );
    }
}

export default HeaderTitle;