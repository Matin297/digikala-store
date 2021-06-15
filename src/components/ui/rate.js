import React from 'react';
import clsx from 'clsx';
import { getTheRating } from 'utils/helpers';
// ICONS
import { ReactComponent as StarSvg } from 'assets/svgs/star.svg';
// STYLES
import './rate.css';

function Rate({ rate, className }) {
    return (
        <span className={clsx("rate", className && className)}>
            <span> {getTheRating(rate)} </span>
            <StarSvg />
        </span >
    )
}

export default Rate
