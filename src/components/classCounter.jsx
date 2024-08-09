import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incriment = this.incriment.bind(this);
        this.decriment = this.decriment.bind(this);
    }

    incriment() {
        this.setState({count: this.state.count + 1})
      }
    
    decriment() {
        this.setState({count: this.state.count - 1})
      }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incriment}>Incriment</button>
                <button onClick={this.decriment}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter;