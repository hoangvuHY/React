import React, { Component } from 'react'
import { connect } from 'react-redux';

class NoteAdd extends Component {
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    saveButton = () => {
        var item = {};
        item.noteTitle = this.state.noteTitle;
        item.noteContent = this.state.noteContent;

        // this.props.getNote(item);
        this.props.addForStore(item);
    }
    render() {

        return (
            <div className="col-4">
                <form>
                    <h3>Sửa tiêu đề notes</h3>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input onChange={this.isChange.bind(this)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tieu de" />
                        <small id="helpId" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea onChange={this.isChange.bind(this)} type="text" className="form-control" name="noteContent" id="noteContent  " aria-describedby="helpId" placeholder="Nội dung notes" defaultValue={" "} />
                        <small id="helpId" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button onClick={() => this.saveButton()} type="reset" className="btn btn-primary btn-block">Save</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addForStore: (getData) => {
            dispatch({
                type: 'ADD_NOTE',
                getData
            })
        }//this.props.addForStore
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteAdd)