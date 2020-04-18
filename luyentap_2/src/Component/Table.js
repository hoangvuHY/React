import React, { Component } from 'react';
import TableData from './TableData';
class Table extends Component {
    tableData = () => {
        // console.log(this.props.data);
        return (
            this.props.data.map((val, key) => (
                <TableData

                    stt={key}
                    key={key}
                    id={val.id}
                    name={val.name}
                    phone={val.phone}
                    permission={val.permission}

                    //Lấy thông tin người dùng khi bấm nút Edit
                    infoEdit={() => this.props.infoEdit(val)}
                    //Thay đổi trạng thái của Edit
                    changeStatusEdit={this.props.changeStatusEdit}
                    //Lấy thông tin khi bấm vào xóa
                    deleteUser={(infoDelete) => this.props.deleteUser(val.id)}
                />
            )
            )
        )
    }
    render() {
        return (
            <div className="col mb-5 ">
                <table className="table table-striped table-hover table-bordered ">
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
                        {
                            this.tableData()
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Table;