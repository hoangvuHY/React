import React, { Component } from 'react'
import { connect } from 'react-redux';


class NoteItem extends Component {

    twoActionButton = () => {
        var trueOrFalse = true;
        this.props.changeEditStatus(trueOrFalse);//Thay đổi trạng thái của edit trong store
        //hàm lấy nd từ store để store update dữ liệu
        // this.props.note;
        ;
        // console.log(this.props.note);
        this.props.getEditData(this.props.note);
    }
    deleteData = () => {
        this.props.getDeleteData(this.props.note.id);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header d-flex justify-content-between" role="tab" id="notes1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#nodeList" href={"#number" + this.props.index} aria-expanded="true" aria-controls="notescontent1">
                            {this.props.noteTitle}
                        </a>
                    </h5>

                    <div className="btn-group" role="group">
                        <button onClick={() => this.twoActionButton()} type="button" className="btn btn-warning">Edit</button>
                        <button onClick={() => this.deleteData()} type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
                <div id={"number" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby="notes1">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isEditNoteItem: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: (trueOrFalse) => {
            dispatch({
                type: "CHANGE_EDIT_STATUS",
                trueOrFalse
            })
        },
        getEditData: (editObject) => {
            dispatch({
                type: "GET_EDIT_DATA",
                editObject
            })
        },
        getDeleteData: (deleteID) => {
            dispatch({
                type: "DELETE",
                deleteID
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
