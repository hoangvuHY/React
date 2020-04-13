import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {


    mappingDataUser = () =>

        this.props.dataUseProps.map((val, key) => (
            <TableDataRow
                key={key}
                stt={key}
                id={val.id}
                name={val.name}
                phone={val.phone}
                permission={val.permission}

                // this.props.ediFun . Chu y ham map
                editFunClick={(user) => this.props.editFun(val)}
                changeEditUserStatus={() => this.props.changeEditUserStatus()}


                deleteButtonClick={(idUser) => { this.deleteButtonClick(idUser) }}
            />
        ))

    deleteButtonClick = (idUser) => {
        // console.log(idUser); 
        this.props.deleteUser(idUser);      
    }

    render() {
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
                            this.mappingDataUser()
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;