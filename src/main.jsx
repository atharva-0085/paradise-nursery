import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

const path = window.location.pathname;

let page;

if (path === "/products") {
  page = <ProductList />;
} else if (path === "/cart") {
  page = <CartItem />;
} else {
  page = <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {page}
    </Provider>
  </React.StrictMode>
);
