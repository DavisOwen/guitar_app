import React, { Component } from "react";
import Tone from "tone";
import Mousetrap from "mousetrap";

class Fret extends Component {

    state = {

        note: this.props.note,

    }

    constructor(props){
        super(props);
        if(props.note[0] === "A" && props.note[1] === "#"){
            this.state.note += "/Bb" + props.note[2];
        }
        if(props.note[0] === "C" && props.note[1] === "#"){
            this.state.note += "/Db" + props.note[2];
        }
        if(props.note[0] === "D" && props.note[1] === "#"){
            this.state.note += "/Eb" + props.note[2];
        }
        if(props.note[0] === "F" && props.note[1] === "#"){
            this.state.note += "/Gb" + props.note[2];
        }
        if(props.note[0] === "G" && props.note[1] === "#"){
            this.state.note += "/Ab" + props.note[2];
        }
    }

    render() {
        return(

            <div className="fret col" onClick={() => this.props.playNote(this.props.note, this.props.id)}> 
                <div id={this.props.id} className="circle"></div>
                <div className="note col-xs-12">{this.state.note}</div>
            </div>

        );
    };
};

export default Fret;
