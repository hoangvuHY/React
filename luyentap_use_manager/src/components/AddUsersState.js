import React, { Component } from 'react';

class AddUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: true
        }
    }

    changeOnOff = () => {
        this.setState({
            status: !this.state.status
        });
    }

    isCheck = () => {
        if (this.state.status) {
            return (
                <div>
                    <button type="button" onClick={this.changeOnOff.bind(this)} className="btn-block btn btn-secondary" >Add</button>
                    <div className="card border-primary my-2" style={{ maxWidth: '18rem' }}>
                        <div className="card-header">Thêm mới user vào hệ thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select">
                                    <option selected>Open this select menu</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modorator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <button type="button" onClick={this.changeOnOff.bind(this)} className="btn-block btn btn-secondary">Close</button>
            )
        }
    }
/*     displayForm = () => {
        if (!this.state.status) {
            return (
            )
        } else {
            return;
        }
    } */
    render() {
        return (

            <div className="col-3">
                {
                    this.isCheck()

                }
                {
                    // this.displayForm()
                }

            </div>
        );
    }
}

export default AddUsers;