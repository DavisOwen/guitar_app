import React, { Component } from "react";
import String from "./components/string";
import Tone from "tone";
import $ from "jquery";
import Mousetrap from "mousetrap";

class App extends Component {

    state = {

        strings: ["E4", "B3", "G3", "D3", "A2", "E2"],

        keyMap: 0

    };

    constructor(){
        super();
        this.synth = new Tone.Synth().toMaster();
    }

    playNote = (note, id) => {
        this.synth.triggerAttackRelease(note, "8n");
        var circle = $("#"+id);
        circle.css("opacity", "1");
        circle.stop(true);
        circle.animate({ opacity: 0 }, 1000);
    }

    bindKeys = (keyMap) => {
        const keys = ["1", "2", "3", "4", "5", "6",
                    "7", "8", "9", "0", "-", "=", 
                    "q", "w", "e", "r", "t", "y", 
                    "u", "i", "o", "p", "[", "]"];
        const notes = ["C", "C#", "D", "D#",
                        "E", "F", "F#", "G",
                        "G#", "A", "A#", "B"];
        const string_idx = [keyMap * 2, keyMap * 2 + 1];
        for(let idx = 0; idx < string_idx.length; idx++){
            let i = -1;
            let j = notes.indexOf(this.state.strings[string_idx[idx]][0]);
            let octave = this.state.strings[string_idx[idx]][1];
            while(i++ < 11){
                let key = keys[i + (idx * 12)];
                let note = notes[j] + octave;
                let id = (keyMap * 24) + (idx * 12) + (i + 1);
                Mousetrap.bind([key], () => this.playNote(note, id));
                if(++j > 11){
                    octave++;
                    j = 0;
                }
            }
        }
    }
    
    keysDown = () => {
       if(this.state.keyMap > 0){
            this.state.keyMap--;
            this.bindKeys(this.state.keyMap); 
       }
    }

    keysUp = () => {
        if(this.state.keyMap < 2){
            this.state.keyMap++;
            this.bindKeys(this.state.keyMap);
        }
    }

    componentDidMount() {
        this.bindKeys(this.state.keyMap);
        Mousetrap.bind(["z"], this.keysDown);
        Mousetrap.bind(["x"], this.keysUp);
    }

    componentWillUnmount() {
        Mousetrap.unbind(["z"], this.keysDown);
        Mousetrap.unbind(["x"], this.keysUp);
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
