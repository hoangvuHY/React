import React, { Component } from 'react';
import { noteData } from './noteData';
import NoteItem from './NoteItem';
class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }

    componentWillMount() {
        noteData.on('value', (notes) => {

            var arrayData = [];

            notes.forEach(element => {
                var key = element.key;
                var noteTitle = element.val().noteTitle;
                var noteContent = element.val().noteContent;

                arrayData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })

            });

            this.setState({
                dataFirebase: arrayData
            })
            console.log(arrayData);

            // console.log(notes.val());
        });
        /*         noteData.once('value').then((notes) => {
                    console.log(notes.val());
        
                }) */
    }

    getData = () => {
        if (this.state.dataFirebase) {
            return (
                this.state.dataFirebase.map((val, key) => {
                    return (
                        <NoteItem
                            key={key}
                            index={key}
                            noteTitle={val.noteTitle}
                            noteContent={val.noteContent}
                        />
                    )
                })
            )
        }
    }
    render() {
        return (
            <div className="col">
                <div id="nodeList" role="tablist" aria-multiselectable="true">
                    {
                        this.getData()
                    }{/* 
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem /> */}
                </div>
            </div>

        );
    }
}

export default NoteList;