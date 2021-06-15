import React, { useState, useMemo } from "react";
// COMPONENTS
import Button from './button';
// STYLES
import "./pagination.css";

const pageNumberLimit = 5;

function getCurrentTheLowerBound(currentPage, numOfPages) {
    if (currentPage <= 5) return 0;
    else if (currentPage >= numOfPages - 5) return numOfPages - 5;
    return currentPage - 3;
}

function getCurrentTheUpperBound(currentPage, numOfPages) {
    if (currentPage <= 5) return 5;
    else if (currentPage >= numOfPages - 5) return numOfPages;
    return currentPage + 2;
}

function PaginationComponent({ currentPage, onChangePageHandler, numOfPages }) {

    const [pageUpperBound, setPageUpperBound] = useState(getCurrentTheUpperBound(currentPage, numOfPages));
    const [pageLowerBound, setPageLowerBound] = useState(getCurrentTheLowerBound(currentPage, numOfPages));

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

        if (currentPage + 1 > pageUpperBound) {
            setPageUpperBound(pageUpperBound + pageNumberLimit);
            setPageLowerBound(pageLowerBound + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        onChangePageHandler(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setPageUpperBound(pageUpperBound - pageNumberLimit);
            setPageLowerBound(pageLowerBound - pageNumberLimit);
        }
    };

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