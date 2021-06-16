import React, { useState, useMemo, useEffect } from "react";
// COMPONENTS
import Button from './button';
// STYLES
import "./pagination.css";

const pageBound = 5;

function getLowerBound(currentPage, numOfPages) {
    if (currentPage <= pageBound || numOfPages <= pageBound) return 0;
    else if (currentPage >= numOfPages - pageBound) return numOfPages - pageBound;
    return currentPage - 3;
}

function getUpperBound(currentPage, numOfPages) {
    if (currentPage <= pageBound || numOfPages <= pageBound) return pageBound;
    else if (currentPage >= numOfPages - pageBound) return numOfPages;
    return currentPage + 2;
}

function PaginationComponent({ currentPage, onChangePageHandler, numOfPages }) {

    const [pageUpperBound, setPageUpperBound] = useState(0);
    const [pageLowerBound, setPageLowerBound] = useState(pageBound);

    const handleClick = e => onChangePageHandler(Number(e.target.id));

    const pages = useMemo(() => {
        const list = [];
        for (let i = 1; i <= numOfPages; i++)
            list.push(i);
        return list;
    }, [numOfPages]);

    const renderPageNumbers = pages.map((number) => {
        if (number < pageUpperBound + 1 && number > pageLowerBound) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    const handleNextbtn = () => {
        onChangePageHandler(currentPage + 1);
    };

    const handlePrevbtn = () => {
        onChangePageHandler(currentPage - 1);
    };

    useEffect(() => {
        if (numOfPages) {
            setPageUpperBound(getUpperBound(currentPage, numOfPages));
            setPageLowerBound(getLowerBound(currentPage, numOfPages));
        }
    }, [numOfPages, currentPage])

    return (
        <ul className="pagination">
            <li>
                <Button
                    onClick={handlePrevbtn}
                    disabled={currentPage === pages[0]}
                    variant="outlined"
                >
                    قبل
                </Button>
            </li>
            {pageLowerBound >= 1 && <li onClick={handlePrevbtn}> &hellip; </li>}
            {renderPageNumbers}
            {pages.length > pageUpperBound && <li onClick={handleNextbtn}> &hellip; </li>}
            <li>
                <Button
                    onClick={handleNextbtn}
                    disabled={currentPage === pages[pages.length - 1]}
                    variant="outlined"
                >
                    بعد
                </Button>
            </li>
        </ul>
    );
}

export default PaginationComponent;