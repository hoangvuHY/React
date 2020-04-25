import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {

    handleAdd = (event) => {
        event.preventDefault();
        var trueOrFalse = true;
        this.props.getEditData(trueOrFalse);
        this.props.changeAddStatus(trueOrFalse);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="http://google.com">Google</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav   mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="http://google.com">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.handleAdd.bind(this)} className="nav-link" href="" >Thêm ghi chú</a>
                            </li>
                        </ul>
                    </div>
                </nav>{/* end menu tren */}

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        getEditData: (trueOrFalse) => {
            dispatch({
                type: "CHANGE_EDIT_STATUS",
                trueOrFalse
            })
        },
        changeAddStatus: (isAdd) => {
            dispatch({
                type: "CHANGE_ADD_STATUS",
                isAdd
            })
        },
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);