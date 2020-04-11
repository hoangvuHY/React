import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if (this.props.permission === 1) {
            return "Admin";
        } else if (this.props.permission === 2) {
            return "Moderator";
        } else {
            return "Normal User";
        }
    }
    render() {
        return (
            <tr>
                <td >{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>
                    {
                        this.permissionShow()
                    }
                </td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">
                            Sửa <i className="fa  fa-edit fa-sm  " />
                        </button>
                        <button type="button" className="btn btn-danger">
                            Xóa <i className="fa  fa-trash" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;