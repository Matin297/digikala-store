import React from 'react';
// STYLES
import './slider.css';

function RangeSlider({ value, label, id, unit, ...props }) {
    return (
        <div className="slider">
            <label id={id}>
                <div>{label}</div>
                <div className="slider__range"> از 0 تا {value} <span> {unit} </span></div>
            </label>
            <input
                type="range"
                id={id}
                value={value}
                {...props}
            />
        </div>
    )
}

export default RangeSlider;
