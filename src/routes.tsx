import type { RouteObject } from "react-router-dom";
import ROUTES from "./constants/routesNames";
import Home from "./pages/Home/Home";
import Headphones from "./pages/Headphones";

const routes: RouteObject[] = [
    {path: ROUTES.HOME, element: <Home/>},
    {path: ROUTES.HEADPHONES, element: <Headphones/>}
]

export default routes