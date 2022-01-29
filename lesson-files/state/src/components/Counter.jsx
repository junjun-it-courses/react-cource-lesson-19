import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleClick = () => {
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: this.state.count + 1 });

        this.setState((state, props) => {
            const { count } = state;

            return { count: count + 1 };
        })
    };

    render() {
        return (
            <button onClick={this.handleClick}>count: {this.state.count}</button>
        );
    }
}

export default Counter;