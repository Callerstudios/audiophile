import type { RouteObject } from "react-router-dom";
import ROUTES from "./constants/routesNames";
import Home from "./pages/Home/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

const routes: RouteObject[] = [
    {path: ROUTES.HOME, element: <Home/>},
    {path: ROUTES.HEADPHONES, element: <Headphones/>},
    {path: ROUTES.SPEAKERS, element: <Speakers/>},
    {path: ROUTES.EARPHONES, element: <Earphones/>},
]

export default routes