import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSNTimeOfWorkersRequest } from "../api/snTimeService";
import { handleClientObject } from "../helpers/mapClientObject";

export const getSNTimeOfWorkers = createAsyncThunk(
    'snTime/getSNTime',
    async (params, thunkAPI) => {
        let clients = await getSNTimeOfWorkersRequest();
        clients = clients.map(client => handleClientObject(client));
        console.log(clients);
        return clients;
    }
)

const initialState = {
    clients: [],
    searchFilter: '',
}

export const snTimeSlice = createSlice({
    name: 'snTime',
    initialState,
    reducers: {
        setSearchFilter: (state, action) => {
            state.searchFilter = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getSNTimeOfWorkers.fulfilled, (state, action) => {
                state.clients = action.payload;
            })
    }
})

export default snTimeSlice.reducer;
export const { setSearchFilter } = snTimeSlice.actions;