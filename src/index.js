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

/*   
1. Placer les calls dans un service
2. uesRef pour les input Profile au lieu de state
3. rememberMe si checked stocker le token dans le localStorage et recup le token from localstorage + useRef sur le checked

4. API URI 
/user/{userId}/account/{accountId} get
/user/{userId}/account/{accountId}/{transactionId}/details get
/user/{userId}/transactions/{transactionId}/ put, post, delete, get


*/