import { IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilter } from "../model/snTimeSlice";
import ClearIcon from '@mui/icons-material/Clear';
import './SearchInput.css';

export const ClientSearchInput = () => {
    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setSearchFilter(searchText));
    }, [searchText]);

    return (
        <TextField
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            InputProps={{
                endAdornment: (
                    <IconButton onClick={() => setSearchText('')}>
                        <ClearIcon />
                    </IconButton>
                )
            }}

            label="Fullname"
            margin="normal"
            className="ClientSearchInput"
        />
    )
}