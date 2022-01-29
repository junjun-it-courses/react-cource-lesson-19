import React from "react";

class IgnoreFirstChild extends React.Component {
    render() {
        const { children } = this.props;
        return (<div>
            {React.Children.map(children, (child, i) => {
                // первый потомок будет пропущен
                if (i < 1) return
                return child
            })}
        </div>);
    }
}

export default IgnoreFirstChild;