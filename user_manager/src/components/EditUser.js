import React, { Component } from 'react';



class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            phone:this.props.userEditObject.phone,
            permission:this.props.userEditObject.permission,
            
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    //this.props.userEditObject
    //this.props.getUserEditInfo
    
    saveButton  = () => {
        this.props.changeEditUserStatus();/* Hide form */

        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);

    }
    
    render() {
        // console.log(this.state);

        return (
            <form className=''>
                <div className="card bg-warning  text-white  my-2 " >
                    <div className="card-header text-center">Sửa thông tin User</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={this.isChange.bind(this)} defaultValue={this.props.userEditObject.name} name='name' type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                        </div>
                        <div className="form-group">
                            <input onChange={this.isChange.bind(this)} defaultValue={this.props.userEditObject.phone} name='phone' type="phone" className="form-control" aria-describedby="helpId" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group" name='permission'>
                            <select onChange={this.isChange.bind(this)} defaultValue={this.props.userEditObject.permission} name='permission' className="custom-select">
                                <option  >Open this select menu</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modorator</option>
                                <option value={3}>Normal User</option>
                            </select>
                        </div>
                        <input value="Save" type="button" onClick={() => this.saveButton()}
                            className="btn btn-primary btn-block" ></input>
                    </div>
                </div>
            </form>
        );
    }
}

export default EditUser;