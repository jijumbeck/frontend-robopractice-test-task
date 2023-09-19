import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const usePagination = (useSelectorFunction) => {
    const list = useSelector(useSelectorFunction);

    const [rowsNumber, setRowsNumber] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const [rowsToDisplay, setRowsToDisplay] = useState([]);

    function setPage(page) {
        if (page > list?.length / rowsNumber) {
            setPageNumber(0);
        } else {
            setPageNumber(page);
        }
    }

    function setRow(number) {
        if (number * pageNumber > list.length) {
            setPage(Math.ceil(list.length / number) - 1);
        }
        setRowsNumber(number);
    }

    function setPageRows() {
        const start = pageNumber * rowsNumber;
        setRowsToDisplay(list.slice(start, start + rowsNumber));
    }

    useEffect(() => {
        setPageRows();
    }, [list, rowsNumber, pageNumber]);

    return {
        count: list?.length,
        rowsNumber,
        pageNumber,
        rowsToDisplay,
        setRow,
        setPage,
    }
}