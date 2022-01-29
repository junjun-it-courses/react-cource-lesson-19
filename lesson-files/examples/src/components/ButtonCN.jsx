import React from "react";
import cn from 'classnames';

class ButtonCN extends React.Component {
    render() {
        const { isPressed, isHovered, label } = this.props;
        // значение это true или false. Если значение true, то класс будет включен,
        // если false – то нет
        // 'btn' это класс который будет подставлен в любом случае

        const btnClass = cn('btn btn-primary', {
            'btn-pressed': isPressed,
            'btn-over': !isPressed && isHovered,
        });

        return <button className={btnClass}>{label}</button>;
    }
}
export default ButtonCN;