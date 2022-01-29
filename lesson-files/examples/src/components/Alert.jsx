import React from "react";

class Alert extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className='container'>
                <div className='row'>
                    <div className="alert alert-primary">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
export default Alert;