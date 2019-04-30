import React, { Component } from "react";
import String from "./components/string";
import Tone from "tone";
import $ from "jquery";

class App extends Component {

    state = {

        strings: ["E4", "B3", "G3", "D3", "A2", "E2"],

        keys: ["65", "83", "68", "70", "71", "72",
                "74", "75", "76", "186", "222",
                "90", "88", "67", "86", "66", "78",
                "77", "188", "190", "191"]

    };

    constructor(){
        super();
        this.synth = new Tone.Synth().toMaster();
    }

    playNote = (note, id) => {
        this.synth.triggerAttackRelease(note, "8n");
        var circle = $("#"+id);
        circle.css("opacity", "1");
        circle.animate({ opacity: 0 }, 1000);
    }

    render() {

        let id = -11;

        return(
            this.state.strings.map(string =>
            
               <String 
                    key={string}
                    note={string}
                    id={id += 12}
                    playNote={this.playNote}
                    keypress={this.keypress}>
                </String>
                
            )
        );

    };
};

export default App
