import {configureStore, combineReducers, getDefaultMiddleware} from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import testSlice from "./TestSlice"

const reducers = combineReducers({
    counter: counterSlice,
    test: testSlice
});

const store = configureStore({
    reducer: reducers,
    // If some Middlewares are not wanted:
    middleware: [...getDefaultMiddleware({ thunk: false })]
});

export default store;