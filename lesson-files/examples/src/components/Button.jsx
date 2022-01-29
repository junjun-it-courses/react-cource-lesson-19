import React from "react";

class Button extends React.Component {
    render () {
        const { isPressed, isHovered, label } = this.props;

        let btnClass = 'btn btn-warning';

        if (isPressed) {
            // Приходится конкатенировать классы
            btnClass += ' btn-pressed';
        } else if (isHovered) {
            btnClass += ' btn-over';
        }


        return <button className={btnClass}>{label}</button>;
    }
}

export default Button;