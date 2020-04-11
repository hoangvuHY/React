import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ""
        }
    }

    hienThiNut = () => {
        if (this.props.hienThiForm) {
            return (
                <div className="btn btn-outline-secondary  " onClick={() => this.props.ketNoi()} >Đóng</div>
            )
        }
        else {
            return (
                <div className="btn btn-outline-secondary " onClick={() => this.props.ketNoi()} >Thêm mới</div>
            )
        }
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        // this.props.checkConnectProps(this.state.tempValue);
    }

    render() {



        return (

            <div className="serchForm">
                <div className="form-group d-flex">
                    <div className="btn-group  " role="group" aria-label="Basic example">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control w-100" aria-describedby="helpId" placeholder="Nhập tên" />
                        <button type="button" className="btn btn-info"
                            onClick={() => this.props.checkConnectProps(this.state.tempValue)}>Tìm </button>
                        {
                            this.hienThiNut()
                        }
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default SearchForm;