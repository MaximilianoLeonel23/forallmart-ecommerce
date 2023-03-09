import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import router from "./router/Router";
import "./styles/index.css";
import { CartProvider } from "./context/CartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </CartProvider>
);
