import React, { useState, useMemo } from "react";
// COMPONENTS
import Button from './button';
// STYLES
import "./pagination.css";

const pageNumberLimit = 5;

function PaginationComponent({ currentPage, onChangePageHandler, numOfPages }) {

    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => onChangePageHandler(Number(event.target.id));

    const pages = useMemo(() => {
        const list = [];
        for (let i = 1; i <= numOfPages; i++)
            list.push(i);
        return list;
    }, [numOfPages]);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
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

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        onChangePageHandler(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
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
            {minPageNumberLimit >= 1 && <li onClick={handlePrevbtn}> &hellip; </li>}
            {renderPageNumbers}
            {pages.length > maxPageNumberLimit && <li onClick={handleNextbtn}> &hellip; </li>}
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