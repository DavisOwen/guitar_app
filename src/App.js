import React, { Component } from "react";
import Counters from "./components/counters"
import NavBar from "./components/navbar";
import String from "./components/string";

class App extends Component {

    state = {
        counters: [
           { id: 1, value: 0 },
           { id: 2, value: 0 },
           { id: 3, value: 0 },
           { id: 4, value: 0 }
        ],

        strings: ["E4", "B3", "G3", "D3", "A2", "E2"]

    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]  = {...counter};
        counters[index].value++;
        this.setState({ counters });
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: counters });
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    render() {

        return(
            <div className="container h-100 d-flex justify-content-center">
                <div className="container my-auto"> 

                    {this.state.strings.map(string =>
                    
                       <String 
                            key={string}
                            note={string}>
                        </String>
                        
                    )}

                </div>
            </div>
        );

    };
};

export default App
