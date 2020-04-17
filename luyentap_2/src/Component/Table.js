import React, { Component } from 'react';
import TableData from './TableData';
class Table extends Component {
    render() {
        return (
            <div className="col ">
                <table className="table table-striped table-hover table-bordered  ">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>SĐT</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>

                        <TableData />
                        <TableData />
                        <TableData />
                        <TableData />
                       
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;