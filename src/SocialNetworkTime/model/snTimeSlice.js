import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSNTimeOfWorkersRequest } from "../api/snTimeService";

export const getSNTimeOfWorkers = createAsyncThunk(
    'snTime/getSNTime',
    async (params, thunkAPI) => {
        const response = await getSNTimeOfWorkersRequest();
        console.log(response);
        return response;
    }
)

const initialState = {
    clients: [],
}

export const snTimeSlice = createSlice({
    name: 'snTime',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getSNTimeOfWorkers.fulfilled, (state, action) => {
                state.clients = action.payload;
            })
    }
})

export default snTimeSlice.reducer;