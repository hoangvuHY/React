import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link float-left" type="button" data-toggle="collapse" data-target={"#" + this.props.id} aria-expanded="false" aria-controls={this.props.id}>
                            {this.props.noteTitle}
                        </button>
                    </h2>
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

export default NoteItem;