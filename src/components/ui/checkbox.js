import React, { useRef } from 'react';
import clsx from 'clsx';
// ICONS
import { ReactComponent as SquareIcon } from 'assets/svgs/square.svg';
import { ReactComponent as CheckedSquareIcon } from 'assets/svgs/square-checked.svg';
// STYLES
import './checkbox.css';

function Checkbox({ id, label, checked, ...props }) {
    const inputRef = useRef();
    return (
        <div
            className={clsx("checkbox", checked && "checkbox--checked")}
            onClick={() => inputRef.current.click()}
        >
            {checked ? <CheckedSquareIcon /> : <SquareIcon />}
            <label htmlFor={id}> {label} </label>
            <input
                checked={checked}
                type="checkbox"
                id={id}
                name={id}
                ref={inputRef}
                {...props}
            />
        </div>
    )
}

export default Checkbox
