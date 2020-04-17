import React, { Component } from 'react';

class TableData extends Component {
    checkPermission = () => {
        if (this.props.permission === 1) {
            return "Admin"
        } else if (this.props.permission === 2) {
            return "Moderator";
        } else {
            return "Normal User";
        }
    }
    isButtonEdit = () => {
        this.props.userInforEdit();
        this.props.editClick()
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{
                    this.checkPermission()
                }</td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={() => this.isButtonEdit()} type="button" className="btn btn-warning">
                            Sửa <i className="fa  fa-edit fa-sm  " />
                        </button>
                        <button onClick={() => this.props.deleteUser()} type="button" className="btn btn-danger">
                            Xóa <i className="fa  fa-trash" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableData;