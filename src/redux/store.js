import {applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
export const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
