import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: 0,
        };

    }
    thongbao = () => { alert("Cach xu ly tt trong reactJS"); }
    thongbaoso2 = () => { alert("Cach xu ly tt trong react JS222"); }
    thongbao3 = (x) => { alert(x); }


    // renderButton = () => (
    //     <div className=" btn btn-group">
    //         <div className="btn btn-info" onClick={this.editClick.bind(this)}>Remove</div>
    //         <div className="btn btn-warning">Modify</div>
    //         {/* <div className="btn btn-danger" onClick={() => this.thongbao3('hehehe')}>Cách 1</div>
    //             <div className="btn btn-danger" onClick={this.thongbao3.bind(this, 'HEHEHEHE')}>Cách 2</div> */}
    //     </div>
    // )

    // renderForm = () =>
    //     (
    //         <div className='row'>
    //             <form className="form-inline">
    //                 <div className="form-group">
    //                     <input type="text" name id className="form-control" />
    //                     <div className="btn btn-success" onClick={this.saveClick.bind(this)} > Save</div>
    //                 </div>
    //             </form>
    //         </div>
    //     );


    // displayCheck = () => {
    //     if (this.state.trangthai === 0) {
    //         return this.renderButton();
    //     } else {
    //         return this.renderForm();
    //     }
    // }


    // editClick = () => {
    //     this.setState({ trangthai: 1 });
    // }
    // saveClick = () => {
    //     this.setState({ trangthai: 0 });
    // }


    renderButton = () => {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Edit</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.buttonClick()}>Remove</button>
            </div>
        );
    }
    rederForm = () => {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input ref={(dulieunhap) => { this.trunggian = dulieunhap}} defaultValue={this.props.tieude} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-dark" onClick={() => this.saveClick()}>Save</button>
                </div>

            </form>
        );
    };

    buttonClick = () => {
        this.setState({ trangthai: 1 });
    }
    saveClick = () => {
        this.setState({ trangthai: 0 });
        console.log(this.trunggian.value);
    }
    displayCheck = () => {
        if (this.state.trangthai === 0) {
            return this.renderButton();
        } else {
            return this.rederForm();
        }
    }


















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
                        </div>
                        {/* {this.displayCheck()} */}
                        {/* {this.displayCheck()} */}
                        {/* {this.displayCheck()} */}
                        {this.displayCheck()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Content;