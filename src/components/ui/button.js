import React from 'react';
import clsx from 'clsx';
// STYLES
import './button.css';

function Button({ children, startIcon, variant = 'contained', ...props }) {
    return (
        <button
            className={clsx(
                "button",
                `button--${variant}`,
                !children && 'button--no-gap')
            }
            {...props}
        >
            {startIcon}
            <div>{children} </div>
        </button>
    )
}

export default Button
