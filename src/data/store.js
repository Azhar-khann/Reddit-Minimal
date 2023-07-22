import { configureStore } from "@reduxjs/toolkit";
import homeSliceReducer from "./homeSlice";
import commentsSliceReducer from './commentsSlice';
import searchSliceReducer from './SearchSlice'

export default configureStore({
    reducer: {
      home: homeSliceReducer,
      comments: commentsSliceReducer,
      search: searchSliceReducer
    },
});