import React, { Component } from "react";
import Tone from "tone";

class Fret extends Component {

    render() {
        return(

            <div className="fret col" onClick={() => this.props.playNote(this.props.note)}>
                <div>{this.props.note}</div>
            </div>

        );
    };
};

export default Fret;
