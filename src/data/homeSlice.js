import { loadData } from "./api";
const { createAsyncThunk, createSlice } =  require("@reduxjs/toolkit");



export const load = createAsyncThunk(
    'home/getData',
    async (type) => {
        const data = await loadData(type);
        return data
    }
) 

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        data: [],
        isLoading:false,
        hasError:false
    },

    reducers: {},

    extraReducers: {

        [load.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.hasError = false;
        },

        [load.fulfilled]: (state, action) => {
            console.log('fulfiled')
            
            state.data = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },

        [load.rejected]: (state, action) => {
            console.log('failed')
            state.isLoading = false;
            state.hasError = true;
        }
    }
});


export const selectdata = (state) => state.home.data;

export const isLoadingData = (state) => state.home.isLoading;
export default homeSlice.reducer;