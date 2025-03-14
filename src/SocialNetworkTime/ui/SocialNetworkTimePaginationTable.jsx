import { TablePagination } from "@mui/material";
import { usePagination } from "../helpers/usePagination"
import { SocialNetworkTimeTable } from "./SocialNetworkTimeTable";

export const SocialNetworkTimePaginationTable = ({ getListFunction }) => {
    const {
        count,
        rowsNumber,
        pageNumber,
        rowsToDisplay,
        setRow,
        setPage,
    } = usePagination(getListFunction);

    return (
        <div>
            <SocialNetworkTimeTable clients={rowsToDisplay} />
            <TablePagination
                component='div'
                count={count}
                page={pageNumber}
                rowsPerPage={rowsNumber}
                onPageChange={(e, page) => {
                    setPage(page);
                }}
                onRowsPerPageChange={e => {
                    setRow(e.target.value);
                }}
            />
        </div>
    )
}