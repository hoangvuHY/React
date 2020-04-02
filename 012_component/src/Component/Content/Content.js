import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);

    }
    thongbao = () => { alert("Cach xu ly tt trong reactJS") };
    thongbaoso2 = () => { alert("Cach xu ly tt trong react JS222") }

    render() {
        return (

            <div className="col-lg-4">

                <div className="row">
                    <div className={"col-lg-5 "}>
                        <div className=" p-1">
                            <img className="img-fluid rounded-circle" src={this.props.linkanh} alt="" />
                        </div>
                    </div>
                    <div className={"col-lg-7 "}>
                        <div className=" p-5">
                            <h2 className="display-6">{this.props.tieude}</h2>
                            <p> {this.props.trichdan}</p>
                            <div className="row">
                                <div className=" btn">
                                    <div className="btn btn-block btn-info" onClick={this.thongbao}>Remove</div>
                                    <div className="btn btn-block btn-warning" onClick={this.thongbaoso2}>Modify</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Content;