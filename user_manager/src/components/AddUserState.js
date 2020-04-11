import React, { Component } from 'react';

class AddUserBanSao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trangthaiChinhSua: false
        }
    }
    thayDoiTrangThai = () => {
        this.setState({
            trangthaiChinhSua: !this.state.trangthaiChinhSua
        });
    }
    hienThiNut = () => {
        if (this.state.trangthaiChinhSua) {
            return (<div className="btn btn-outline-secondary btn-block" onClick={this.thayDoiTrangThai.bind(this)} >Đóng</div>)
        } else {
            return (
                <div className="btn btn-outline-secondary btn-block" onClick={this.thayDoiTrangThai.bind(this)}>Thêm mới</div>
            )
        }
    }
    hienThiForm = () => {
        if (this.state.trangthaiChinhSua) {
            return (
                <div className="card border-primary my-2" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Thêm mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select">
                                <option  >Open this select menu</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modorator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="col-3">
                {
                    this.hienThiNut()
                }

                {
                    this.hienThiForm()
                }
            </div>

        );
    }
}

export default AddUserBanSao;