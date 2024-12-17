import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/index";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import Navbar from "./components/Navbar";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <Navbar /> */}
      <App />
    </PersistGate>
  </Provider>
);
