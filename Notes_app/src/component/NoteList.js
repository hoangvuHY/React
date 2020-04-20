import React, { Component } from 'react';

class NoteList extends Component {
    render() {
        return (
            <div className="col">
                <div id="nodeList" role="tablist" aria-multiselectable="true">
                    <div className="card">
                        <div className="card-header" role="tab" id="notes1">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#nodeList" href="#notescontent1" aria-expanded="true" aria-controls="notescontent1">
                                    Ghi chú ngày 18/4/2020
                    </a>
                            </h5>
                        </div>
                        <div id="notescontent1" className="collapse in" role="tabpanel" aria-labelledby="notes1">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim quaerat suscipit
                                aspernatur corporis in animi, odit nesciunt sapiente quam laboriosam distinctio! Error
                                expedita, ratione optio dolore doloribus corporis asperiores?
                  </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" role="tab" id="notes2">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#nodeList" href="#notescontent2" aria-expanded="true" aria-controls="notescontent2">
                                    Ghi chú 17/4/2020
                    </a>
                            </h5>
                        </div>
                        <div id="notescontent2" className="collapse in" role="tabpanel" aria-labelledby="notes2">
                            <div className="card-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus enim quaerat suscipit
                                aspernatur corporis in animi, odit nesciunt sapiente quam laboriosam distinctio! Error
                                expedita, ratione optio dolore doloribus corporis asperiores?
                  </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default NoteList;