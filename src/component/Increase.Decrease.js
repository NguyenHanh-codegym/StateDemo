import { render } from "@testing-library/react";
import { Component } from "react";

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
        };
    }

    increment = () => {
        this.setState({ number: this.state.number + 1 });
    }
    decrease = () => {
        this.setState({ number: this.state.number - 1 });
    }

    render() {
        return (
            <div style={{ textAlign: "center", padding: 30 }}>
                <button onClick={this.increment}>Increment</button>
                <span style={{ padding: 10 }}>{this.state.number}</span>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        );
    }
}
export default Calculate;