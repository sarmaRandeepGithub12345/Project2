import {configureStore} from "@reduxjs/toolkit";
import LoadingBarReducer from "../reducers/LoadingBar";
const store = configureStore({
    reducer : {
       loadingBar : LoadingBarReducer
    },
});

export default store;