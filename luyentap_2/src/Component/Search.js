import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {


    changeButton = () => {
        if (this.props.statusAdd) {
            return (
                <button onClick={() => this.props.changeStatusAddClose()} type="button" className="btn btn-primary">Add</button>
            )
        } else {
            return (
                <button onClick={() => this.props.changeStatusAddClose()} type="button" className="btn btn-danger">Close</button>
            )
        }
    }
    valueSearch = (event) => {
        var value = event.target.value;
        this.setState({
            valueSearch: value
        });
        // this.props.searchUser(value) : Hiện ngay kết quả nếu trùng khớp giá trị
    }

    //thay đổi trạng thái của Edit
    changeStatusEditInSearch = () => {
        if (this.props.statusEdit) {
            return (
                <EditUser
                    //Thay đổi trạng thái form
                    changeStatusEdit={() => this.props.changeStatusEdit()}
                    //Trạng thái của Edit
                    statusEdit={this.props.statusEdit}
                    //Thông tin của Edit User
                    objectEdit={this.props.objectEdit}
                    // Bấm vào nút save
                    getUserEdit={(infoUserEdit) => this.props.getUserEdit(infoUserEdit)}

                />

            )
        }
    }

    render() {
        return (
            <div className="col-12">
                {
                    this.changeStatusEditInSearch()
                }
                <div className="serchForm">
                    <div className="form-group">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <input onChange={(event) => this.valueSearch(event)} type="text" className="form-control " aria-describedby="helpId" placeholder="Nhập Tên" style={{ width: "550px" }} />
                            <button onClick={(valueSearch) => this.props.searchUser(this.state.valueSearch)} type="button" className="btn btn-info">Search </button>
                            {
                                this.changeButton()
                            }
                        </div>
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default Search;