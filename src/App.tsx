import { BrowserRouter, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";

const RoutesWrapper = () => {
  return useRoutes(routes);
};

function App() {
  // const tasks = useQuery(api.tasks.get)
  return (
    <>
      {/* {tasks ? tasks.map((t)=>t.text):"No Tasks"} */}
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>
    </>
  );
}

export default App;
