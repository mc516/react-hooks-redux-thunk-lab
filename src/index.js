import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore,  applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import catsReducer from "./features/cats/catsSlice.js";
import "bootstrap/dist/css/bootstrap.min.css";


const store = createStore(catsReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);
