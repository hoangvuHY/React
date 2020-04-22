import React, { Component } from 'react'
import NoteItem from './NoteItem';
import { noteData } from './firebase';

class Accodion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayDatas: []
        }
    }

    componentWillMount() {
        noteData.on('value', (notes) => {
            // console.log(notes.val());
            var arrayData = [];

            notes.forEach((val, key) => {
                // console.log(val.noteTitle);
                var item = {};
                item.id = val.key;
                item.noteTitle = val.val().noteTitle;
                item.noteContent = val.val().noteContent;
                arrayData.push(
                    item
                );
            })
            this.setState({
                arrayDatas: arrayData
            })

        })

    }

    fullData = () => {
        console.log('chay duoc');
        if (this.state.arrayDatas) {
            return (
                this.state.arrayDatas.map(
                    (val, key) => {
                        return (

                            <NoteItem
                                key={key}
                                id={val.id}
                                noteTitle={val.noteTitle}
                                noteContent={val.noteContent}
                            />
                        )

                    }
                )
            )
        }
    }

    render() {
        console.log((this.state.arrayDatas));
        return (
            <div className="col">
                <div className="accordion" id="accordionExample">
                    {
                        this.fullData()
                    }
                    {/* <NoteItem /> */}
                    {/* <NoteItem /> */}
                </div>
            </div>
        )
    }
}

export default Accodion;
