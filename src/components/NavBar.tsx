import cartImage from "../assets/carts.svg";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router";
import ROUTES from "../constants/routesNames";

const NavBar = () => {
  return (
    <div className="pt-8 h-24 border-b border-white flex flex-row justify-between items-center">
      <img src={logo} alt="Website Logo" />
      <nav className="flex flex-row justify-between gap-4 text-white">
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => (isActive ? "text-xs" : "")}
        >
          HOME
        </NavLink>
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => (isActive ? "text-xs" : "")}
        >
          HEADPHONES
        </NavLink>
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => (isActive ? "text-xs" : "")}
        >
          SPEAKERS
        </NavLink>
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => (isActive ? "text-xs" : "")}
        >
          EARPHONES
        </NavLink>
      </nav>
      <img src={cartImage} alt="Cart Icon" />
    </div>
  );
};

export default NavBar;
