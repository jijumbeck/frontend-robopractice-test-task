import { configureStore } from "@reduxjs/toolkit";
import snTime from './../SocialNetworkTime/model/snTimeSlice';

export const store = configureStore({
    reducer: {
        snTimeOfWorkers: snTime,
    }
})