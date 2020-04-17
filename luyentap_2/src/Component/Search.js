import React, { Component } from 'react';

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
    render() {
        return (
            <div className="col-12">

                <div className="serchForm">
                    <div className="form-group">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <input type="text" className="form-control w-100" aria-describedby="helpId" placeholder="Nhập từ khóa" style={{ width: "500px" }} />
                            <button type="button" className="btn btn-info">Tìm </button>
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