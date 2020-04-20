import React, { Component } from 'react';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }


    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        console.log(name + "     " + value);
        this.setState({
            [name]: value
        });
    }
    
    addData  = (title,content) => {
        var item = {};
        item.noteTitle = title;
        item.noteContent = content;
        //gửi dữ liệu lên app để app xử lý
        // console.log(item);
        this.props.getData(item);
    }

    render() {
        return (
            <div className="col-4">
                <form>
                <h3>Sửa tiêu đề notes</h3>
                <div className="form-group">
                    <label htmlFor="noteTitle">Tiêu đề note</label>
                    <input onChange = {this.isChange.bind(this)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tieu de" />
                    <small id="helpId" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <div className="form-group">
                    <label htmlFor="noteContent">Nội dung note</label>
                    <textarea onChange = {this.isChange.bind(this)}  type="text" className="form-control" name="noteContent" id="noteContent  " aria-describedby="helpId" placeholder="Nội dung notes" defaultValue={" "} />
                    <small id="helpId" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <button type="reset" onClick = {()=>this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-primary btn-block">Save</button>
                </form>
            </div>


        );
    }
}

export default NoteForm;