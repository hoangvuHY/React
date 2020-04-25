import React, { Component } from 'react'
import { connect } from 'react-redux';

class NoteAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.noteEdit.id,
            noteTitle: this.props.noteEdit.noteTitle,
            noteContent: this.props.noteEdit.noteContent,
        }
    }

    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    /* 
    componentWillMount() {
        if (this.props.noteEdit) {
            var editObject = {};
            editObject.id = this.props.noteEdit.id;
            editObject.noteTitle = this.props.noteEdit.noteTitle;
            editObject.noteContent = this.props.noteEdit.noteContent;

            console.log(editObject);
        }
    } */


    saveButton = () => {

        if (this.props.noteEdit) {
            var trueOrFalse = false;
            this.props.changeEditStatus(trueOrFalse);
            var item = {};
            item.id = this.state.id;
            item.noteTitle = this.state.noteTitle;
            item.noteContent = this.state.noteContent;
            this.props.getEdited(item);
        }
        else {

            var item = {};
            item.noteTitle = this.state.noteTitle;
            item.noteContent = this.state.noteContent;

            // this.props.getNote(item);
            this.props.addForStore(item);
        }
    }
    checkDisplay = () => {
        if (this.props.editStatus) {
            return (
                <span>
                    <h3 style={{ width: '300px' }}>Sửa tiêu đề notes</h3>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input defaultValue={this.props.noteEdit.noteTitle} onChange={this.isChange.bind(this)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tieu de" />
                        <small id="helpId" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea defaultValue={this.props.noteEdit.noteContent} onChange={this.isChange.bind(this)} type="text" className="form-control" name="noteContent" id="noteContent  " aria-describedby="helpId" placeholder="Nội dung notes" />
                        <small id="helpId" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button onClick={() => this.saveButton()} type="reset" className="btn btn-primary btn-block">Save</button>
                </span>
            )
        }
    }
    render() {
        // console.log(this.props.noteEdit);
        return (
            <form >
                {
                    this.checkDisplay()
                }
            </form>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus,
        noteEdit: state.noteEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addForStore: (getData) => {
            dispatch({
                type: 'ADD_NOTE',
                getData
            })
        },//this.props.addForStore
        changeEditStatus: (trueOrFalse) => {
            dispatch({
                type: "CHANGE_EDIT_STATUS",
                trueOrFalse
            })
        }, getEdited: (getNoteEdited) => {
            dispatch({
                type: "EDITED",
                getNoteEdited
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteAdd)