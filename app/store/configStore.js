import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import AppReducer from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const loggerMiddleware = createLogger();

export default function configureStore(initState) {
    return createStore(
        AppReducer,
        initState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    );
}

