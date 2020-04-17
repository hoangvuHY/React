import React, { Component } from 'react';

class AddUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phone: '',
            permission: "1"

        }
    }


    changeForm = () => {
        // console.log(this.state.name);
        if (!this.props.status) {
            return (

                <div className="card border-primary my-2 col-3" style={{ maxWidth: '18rem' }}>
                    <form>
                        <div className="card-header">Thêm mới user vào hệ thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} name='name' type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} name="phone" type="text" className="form-control" aria-describedby="helpId" placeholder="Số điện thoại" />
                            </div>
                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)} name="permission" className="custom-select">
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modorator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <input className="btn btn-primary btn-block" type="reset" value="Submit"
                                onClick={(name, phone, permission) => this.props.userInfo(this.state.name, this.state.phone, this.state.permission)} >
                                </input>
                        </div>
                    </form>
                </div >

            )
        } else {
            return true;
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });

    }

    render() {
        // console.log(this.state);
        return (
            <div className="">

                {
                    this.changeForm()
                }
            </div>

        );
    }
}

export default AddUsers;