import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodoApp from "./components/layout/TodoApp";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
