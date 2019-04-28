import React, { Component } from "react";
import Fret from "./fret";

class String extends Component{

    constructor(props){
        super(props);
        const notes = ["C", "C#", "D", "D#",
                        "E", "F", "F#", "G",
                        "G#", "A", "A#", "B"];
        let i = 0;
        let j = notes.indexOf(props.note[0]); 
        let string_notes = [];
        let octave = props.note[1];
        while(i++ < 12){
            string_notes.push(notes[j]+octave);
            if(++j > 11){
                octave++;
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
                    note={note}
                    playNote={this.props.playNote}>
                </Fret>
            )}
            </div>
        );
    }

}

export default String;
