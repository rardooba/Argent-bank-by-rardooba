import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";

//Redux
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
//------
import rootReducer from "./redux/reducers";
//------
import thunk from "redux-thunk";

//? logger is a redux debbuger > show result in console browser
import logger from "redux-logger";

//! init STORE
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);