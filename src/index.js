import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";

//Redux
//import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { store } from "./redux/redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/lib/integration/react";

//------------------------------------------------------------//

//STORE init with Persistor
let persistor = persistStore(store);

//------------------------------------------------------------//

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
