import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.objectEdit.id,
            name: this.props.objectEdit.name,
            phone: this.props.objectEdit.phone,
            permission: this.props.objectEdit.permission,
        }
    }


    changeStatusEdit = () => {
        if (this.props.statusEdit) {
            return (
                <form>
                    <div className="card-header   bg-warning">Thêm mới user vào hệ thống</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={(event) => this.isChangeEdit(event)}
                                defaultValue={this.props.objectEdit.name} name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.isChangeEdit(event)}
                                defaultValue={this.props.objectEdit.phone} name="phone" type="text" className="form-control" aria-describedby="helpId" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => this.isChangeEdit(event)}
                                defaultValue={this.props.objectEdit.permission} name="permission" className="custom-select" >
                                <option >Open this select menu</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modorator</option>
                                <option value={3}>Normal User</option>
                            </select>
                        </div>
                        <button onClick={() => { this.saveOnClick() }} type="button"
                            className="btn btn-success btn-block">Save</button>
                    </div>
                </form>
            )
        }
        else {
            return true;
        }
    }
    isChangeEdit = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    saveOnClick = () => {
        this.props.changeStatusEdit();
        this.setState({
            id: this.props.objectEdit.id,
            name: this.props.objectEdit.name,
            phone: this.props.objectEdit.phone,
            permission: this.props.objectEdit.permission,
        });

        var edited = {};
        edited.id = this.state.id;
        edited.name = this.state.name;
        edited.phone = this.state.phone;
        edited.permission = parseInt( this.state.permission); 
        console.log(edited);
  
        this.props.getUserEdit(edited)
    }
    render() {
        return (
            <div className="card border-primary mb-3 bg-info " >
                {
                    this.changeStatusEdit()
                }
            </div >
        );
    }
}

export default EditUser;