import React, { Component } from "react";

class Fret extends Component {
    render() {
        return(

            <div className="fret col">
                <div>{this.props.note}</div>
            </div>

        );
    };
};

export default Fret;
