import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/Filter_Context";
import { CartProvider } from "./Context/cart_Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
);
