import type { RouteObject } from "react-router-dom";
import ROUTES from "./constants/routesNames";
import Home from "./pages/Home/Home";

const routes: RouteObject[] = [
    {path: ROUTES.HOME, element: <Home/>}
]

export default routes