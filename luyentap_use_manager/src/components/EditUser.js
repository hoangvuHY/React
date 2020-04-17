import React, { Component } from 'react';

class EditUser extends Component {
    //props.objectEdit
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.objectEdit.id,
            name: this.props.objectEdit.name,
            phone: this.props.objectEdit.phone,
            permission: this.props.objectEdit.permission
        }


    }

    changeEditForm = () => {
        if (this.props.statusEdit) {
            return (
                <div className="card border-primary mb-5 "  >
                    <div className="card-header bg-warning text-center">Edit User Form</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input defaultValue={this.props.objectEdit.name} onChange={this.isChange.bind(this)} name='name' type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                        </div>
                        <div className="form-group">
                            <input defaultValue={this.props.objectEdit.phone} onChange={this.isChange.bind(this)} name="phone" type="text" className="form-control" aria-describedby="helpId" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select defaultValue={this.props.objectEdit.permission} onChange={this.isChange.bind(this)} name="permission" className="custom-select">
                                <option value={1}>Admin</option>
                                <option value={2}>Modorator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <button onClick={(edited) => this.saveOnClick(edited)} className=" btn btn-primary btn-block">
                            Save
                    </button>
                    </div>
                </div >
            )
        } else {
            return true;
        }
    }
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });

    }

    saveOnClick = () => {
        this.props.saveClick();

        var edited = {}
        edited.id = this.state.id;
        edited.name = this.state.name;
        edited.phone = this.state.phone;
        edited.permission = this.state.permission;
        this.props.getUserEdit(edited)

    }
    render() {
        // console.log(this.state);
        return (
            <div>
                {this.changeEditForm()}
            </div>
        );
    }
}

export default EditUser;