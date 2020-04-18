import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objectAdd: {
                name: "",
                phone: "",
                permission: ""
            }
        }
    }


    changeAddUser = () => {

        if (!this.props.statusAdd) {
            return (
                <div className="card border-primary mb-3 col " >
                    <form>
                        <div className="card-header">Thêm mới user vào hệ thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={this.isChangeAdd.bind(this)} name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.isChangeAdd.bind(this)} name="phone" type="text" className="form-control" aria-describedby="helpId" placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group">
                                <select onChange={this.isChangeAdd.bind(this)} name="permission" className="custom-select" >
                                    <option >Open this select menu</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modorator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <input onClick={(name, phone, permission) => this.props.addOnClick(this.state.name, this.state.phone, this.state.permission)} type="reset" value="ADD" className="btn btn-primary btn-block" />
                        </div>
                    </form>
                </div >
            )
        } else {
            return true;
        }
    }
    isChangeAdd = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });

    }
 
    render() {

        /*       = ;
               =;
             =; */

        // console.log(this.state.objectAdd);
        return (
            <div  >
                {
                    this.changeAddUser()
                } 
            </div>

        );
    }
}

export default AddUser;