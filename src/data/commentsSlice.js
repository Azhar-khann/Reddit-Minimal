const { Comments } = require("./api");
const { createAsyncThunk, createSlice } =  require("@reduxjs/toolkit");

export const loadComments = createAsyncThunk(
    'comments/getComments',
    async (id) => {
        const data = await Comments(id);
        return data
    }
) 

export const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        data: [],
        isLoading:false,
        hasError:false
    },

    reducers: {},

    extraReducers: {

        [loadComments.pending]: (state, action) => {
            //console.log('pending comments')
            state.isLoading = true;
            state.hasError = false;
        },

        [loadComments.fulfilled]: (state, action) => {
            //console.log('fulfiled comments')
            state.data = action.payload;
            state.isLoading = false;
            console.log(state.isLoading)
            state.hasError = false;
        },

        [loadComments.rejected]: (state, action) => {
            //console.log('failed comments')
            state.isLoading = false;
            state.hasError = true;
        }
    }
});


export const selectComments = (state) => state.comments.data;

export const isLoadingComments = (state) => state.comments.isLoading;
export default commentsSlice.reducer;