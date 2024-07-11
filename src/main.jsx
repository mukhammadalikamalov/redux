import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./core/redux/store.js";
import "./index.css";
import DataFetcher from "./components/DataFetch.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DataFetcher />
    </Provider>
  </React.StrictMode>
);
