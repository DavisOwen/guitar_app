import React, { Component } from "react";
import Fret from "./fret";

class String extends Component{

    constructor(props){
        super(props);
        const notes = ["A", "A#", "B", "C",
                "C#", "D", "D#", "E",
                "F", "F#", "G", "G#"];
        let i = 0;
        let j = notes.indexOf(props.note[0]); 
        let string_notes = [];
        while(i++ < 12){
            string_notes.push(notes[j]);
            if(++j > 11){
                j = 0;
            }
        };
        this.state = { notes: string_notes };
    }

    render(){
        return(
            <div className="row">
            { this.state.notes.map(note =>
                <Fret 
                    key={note}
                    note={note}>
                </Fret>
            )}
            </div>
        );
    }

}

export default String;
