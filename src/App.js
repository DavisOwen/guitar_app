import React, { Component } from "react";
import String from "./components/string";
import Tone from "tone";

class App extends Component {

    state = {

        strings: ["E4", "B3", "G3", "D3", "A2", "E2"]

    };

    constructor(){
        super();
        this.synth = new Tone.Synth().toMaster();
    }

    playNote = (note) => {
        this.synth.triggerAttackRelease(note, "8n");
        console.log(note);
    }

    render() {

        return(
            <div className="container h-100 d-flex justify-content-center">
                <div className="container my-auto"> 

                    {this.state.strings.map(string =>
                    
                       <String 
                            key={string}
                            note={string}
                            playNote={this.playNote}>
                        </String>
                        
                    )}

                </div>
            </div>
        );

    };
};

export default App
