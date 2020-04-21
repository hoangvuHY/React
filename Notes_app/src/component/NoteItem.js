import React, { Component } from 'react'

export default class NoteItem extends Component {
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
                        <button type="button" className="btn btn-secondary">Edit</button>
                        <button type="button" className="btn btn-secondary">Delete</button>
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
