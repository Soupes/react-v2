import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Vinyl, VinylSliceState, Status } from './types';
import { SearchVinylParams } from './types';

export const fetchVinyl = createAsyncThunk<Vinyl[], SearchVinylParams>(
    'vinyl/fetchVinylStatus',
    async (params) => {
        const {
            sortBy,
            order,
            category,
            search,
            currentPage,
        } = params;
        const { data } = await axios.get<Vinyl[]>(
            `https://63bb1a1e32d17a50908714d3.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
        );
        return data;
    });

const initialState: VinylSliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error
};

const vinylSlice = createSlice({
    name: 'vinyl',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Vinyl[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVinyl.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });

        builder.addCase(fetchVinyl.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchVinyl.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    },
});

export const { setItems } = vinylSlice.actions;

export default vinylSlice.reducer;