import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <tr>
                <td >1</td>
                <td>Trần Đức Lương</td>
                <td>0324568953</td>
                <td>Moderator</td>
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

export default TableData;