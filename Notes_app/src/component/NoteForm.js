import React, { Component } from 'react';
import { connect } from 'react-redux';



class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: '',
        }
    }

    componentWillMount() {
        if (this.props.editItem) {//th sua
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id,
            })
        }
    }



    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        // console.log(name + "     " + value);
        this.setState({
            [name]: value
        });
    }

    addData = (title, content) => {
        /* Cach 1 
                var item = {};
                item.noteTitle = title;
                item.noteContent = content;
                //gửi dữ liệu lên app để app xử lý
                // console.log(item);
                this.props.addData(item);
                 */
        /* 
                var item = {};
                item.noteTitle = title;
                item.noteContent = content;
                //gửi dữ liệu lên app để app xử lý
                // console.log(item);
                this.props.addDataStore(item);//Su dung reducer trong store . dispatch Add_data
         */
        if (this.state.id) {//edit case
            // alert("Dang sua thoi");


            var editObjet = {};
            editObjet.id = this.state.id;
            editObjet.noteContent = content;
            editObjet.noteTitle = title;


            this.props.editDataStore(editObjet);

            var trueOrFalse = false;
            this.props.changeEditStatus(trueOrFalse);

            this.props.alertOn("Sửa thành công");

        }
        else {


            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            //gửi dữ liệu lên app để app xử lý
            // console.log(item);
            this.props.addDataStore(item);//Su dung reducer trong store . dispatch Add_data

            var trueOrFalse = false;
            this.props.changeEditStatus(trueOrFalse);

            this.props.alertOn("Thêm mới thành công");

        }

    }
    printTitle = () => {
        if (this.props.addStatus) {
            return "Thêm mới nội dung"
        } else {
            return 'Sửa nội dung'
        }
    }
    render() {
        // console.log(this.props.editItem);
        return (
            <div className="col-4">
                <form>
                    <h3>
                        {
                            this.printTitle()
                        }
                    </h3>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề note</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange={this.isChange.bind(this)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tieu de" />
                        <small id="helpId" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea defaultValue={this.props.editItem.noteContent} onChange={this.isChange.bind(this)} type="text" className="form-control" name="noteContent" id="noteContent  " aria-describedby="helpId" placeholder="Nội dung notes" />
                        <small id="helpId" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">Save</button>
                </form>
            </div>


        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addStatus: state.isAdd

    }
}
//this.props.editItem

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({
                type: "Add_Data",
                getItem
            });
        },
        editDataStore: (getItem) => {
            dispatch({
                type: "EDIT",
                getItem
            });
        },
        changeEditStatus: (trueOrFalse) => {
            dispatch({
                type: "CHANGE_EDIT_STATUS",
                trueOrFalse
            })
        },
        alertOn: (alertContent) => {
            dispatch({
                type: "ALERT_ON",
                alertContent
            })
        },
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF",
            })
        },

        //CHANGE_TITLE

    }
}
//this.props.addDataStore()
// export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
// export default NoteForm;