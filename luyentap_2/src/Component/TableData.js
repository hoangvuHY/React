import React, { Component } from 'react';

class TableData extends Component {

    permissionUser = () => {
        if (this.props.permission === 1) {
            return "Admin";
        } else if (this.props.permission === 2) {
            return "Moderator";

        } else {
            return "Normal User";
        }

    }
    editButton = () => {
        this.props.infoEdit();
        this.props.changeStatusEdit();
    }
    render() {

        return (

            <tr>
                <td > {this.props.stt + 1} </td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>
                    {
                        this.permissionUser()
                    }
                </td>
                <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={() => this.editButton()} type="button" className="btn btn-secondary">
                            Sửa <i className="fa  fa-edit fa-sm  " />
                        </button>
                        <button onClick={this.props.deleteUser} type="button" className="btn btn-danger">
                            Xóa <i className="fa  fa-trash" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableData;