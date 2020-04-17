import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }
    //props.objectEdit



    changeButton = () => {
        if (this.props.status) {
            return (
                <button onClick={this.props.changeStatus} type="button" className=" btn btn-outline-secondary">Add</button>
            )
        } else {
            return (
                <button onClick={this.props.changeStatus} type="button" className="  btn btn-outline-secondary">Close</button>
            )
        }
    }
    getValueSearch = (event) => {
        this.setState({
            searchValue: event.target.value
        });
        // this.props.valueTransmission(this.state.searchValue)
    }
    changeEdit = () => {
        if (this.props.statusEdit) {
            return (
                <EditUser
                    //this.props.saveClick
                    saveClick={() => this.props.saveClick()}
                    statusEdit={this.props.statusEdit}
                    objectEdit={this.props.objectEdit}
                    getUserEdit={this.props.getUserEdit}
                />
            )
        } else {
            return true;
        }
    }
    render() {
        return (

            <div className="col-12">
                {
                    this.changeEdit()
                }

                <div className="serchForm">
                    <div className="form-group">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <input onChange={(event) => this.getValueSearch(event)} name="fSearch" type="text" className="form-control" placeholder="Nhập từ khóa" style={{ width: '500px' }} />
                            <button onClick={() => this.props.valueTransmission(this.state.searchValue)} type="button" className="btn btn-info" >Tìm </button>
                            {
                                this.changeButton()
                            }
                        </div>
                    </div>
                </div>
                <hr className='my-5' />
            </div>
        );
    }
}

export default Search;