import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {
    editClick = () => {
        // console.log(); 
        var isTrue = true;
        this.props.changeEditStatus(isTrue);
        this.props.getNoteEdit(this.props.note);
    }
    deleteClick = () => {
        this.props.deleteNote(this.props.note);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header d-flex justify-content-between" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link float-left" type="button" data-toggle="collapse" data-target={"#" + this.props.id} aria-expanded="false" aria-controls={this.props.id}>
                            {this.props.noteTitle}
                        </button>
                    </h2>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button onClick={() => this.editClick()} type="button" className="btn btn-warning">Edit</button>
                        <button onClick={()=>this.deleteClick()} type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
                <div id={this.props.id} className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getNoteEdit: (getNoteEdit) => {
            dispatch({
                type: "GET_NOTE_EDIT",
                getNoteEdit
            })
        },
        changeEditStatus: (trueOrFalse) => {
            dispatch({
                type: "CHANGE_EDIT_STATUS",
                trueOrFalse
            })
        },
        deleteNote: (getNoteDelete) => {
            dispatch({
                type: "DELETE",
                getNoteDelete
            })
        },
        
        // DELETE
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);

// export default NoteItem;