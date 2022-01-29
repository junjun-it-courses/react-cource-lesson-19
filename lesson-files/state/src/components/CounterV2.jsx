import React from "react";

class CounterV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.count }
    }

    handleClick = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    };

    render() {
        return <button onClick={this.handleClick}>
            count: {this.state.count}
        </button>;
    }
}


CounterV2.defaultProps = {
    count: 0,
};


export default CounterV2;