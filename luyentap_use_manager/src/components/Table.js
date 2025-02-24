import React, { Component } from 'react';
import TableData from './TableData';

class Table extends Component {
    //props.deleteUser
    tableData = () => {
        return (
            this.props.dataUser.map((value, key) => {
                return (
                    <TableData
                        editClick={() => this.props.editClick()}
                        userInforEdit={(infoEdit) => this.props.userInforEdit(value)}

                        deleteUser={(infoUserDelete) => this.props.deleteUser(value.id)}

                        key={key}
                        stt={key}
                        id={value.id}
                        name={value.name}
                        phone={value.phone}
                        permission={value.permission}


                    />
                )
            })
        )
    }

    render() {
        // console.log(this.props.dataUser);
        return (
            <div className="col">
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