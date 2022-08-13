import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import {rootReducer} from "./redux/reducers/index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

const context = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Provider store={context}><App/></Provider>);