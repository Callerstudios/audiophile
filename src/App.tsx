import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RoutesWrapper = () => {
  return useRoutes(routes);
};

function App() {
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
