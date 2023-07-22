const { Search } = require("./api");
const { createAsyncThunk, createSlice } =  require("@reduxjs/toolkit");



export const loadSearch = createAsyncThunk(
    'search/getData',
    async (query) => {
        const data = await Search(query);
        return data
    }
) 

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: [],
        isLoading:false,
        hasError:false
    },

    reducers: {},

    extraReducers: {

        [loadSearch.pending]: (state, action) => {
            console.log('pending')
            state.isLoading = true;
            state.hasError = false;
        },

        [loadSearch.fulfilled]: (state, action) => {
            console.log('fulfiled')
            state.data = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },

        [loadSearch.rejected]: (state, action) => {
            console.log('failed')
            state.isLoading = false;
            state.hasError = true;
        }
    }
});


export const selectSearch = (state) => state.search.data;

export const isLoadingData = (state) => state.search.isLoading;
export default searchSlice.reducer;