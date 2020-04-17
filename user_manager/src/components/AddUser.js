import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phone: '',
            permission: ''
        }
    }

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm) {
            return (
                <form>
                    <div className="card border-primary my-2  col-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">Thêm mới user vào hệ thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={(event) => { this.isChange(event) }} name='name' type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => { this.isChange(event) }} name='phone' type="phone" className="form-control" aria-describedby="helpId" placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group" name='permission'>
                                <select onChange={(event) => { this.isChange(event) }} name='permission' className="custom-select">
                                    <option  >Open this select menu</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modorator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <input value="Add User" type="reset" 
                            onClick={(name, phone, permission) => this.props.add(this.state.name, this.state.phone, this.state.permission)} 
                            className="btn btn-primary btn-block" ></input>
                        </div>
                    </div>
                </form>
            )
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });

        //pakage to items
        /*         var items = {};
                items.id = this.state.id;
                items.name = this.state.name;
                items.phone = this.state.phone;
                items.permission = this.state.permission;
                console.log(items); */
    }
    render() {

        // console.log(this.state);
        return (
            <div>
                {
                    this.kiemTraTrangThai()
                }

            </div>

        );
    }
}

export default AddUser;