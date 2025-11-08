import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "./slices/cartSlice";

const RoutesWrapper = () => {
  return useRoutes(routes);
};

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const stored = localStorage.getItem("cart");

    if (stored) {
      try {
        const parsedCart = JSON.parse(stored);
        dispatch(setCart(parsedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        // Optional: clear invalid cart
        localStorage.removeItem("cart");
      }
    }
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>

      {/* Toast container goes here — outside the router but inside App */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
