import React from 'react';
// STYLES
import './input.css';

function Input({ id, label, ...props }) {
    return (
        <div className="input">
            <label htmlFor={id}> {label} </label>
            <input id={id} type="text" {...props} />
        </div>
    )
}

export default Input
