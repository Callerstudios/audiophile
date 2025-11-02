import cartImage from "../assets/carts.svg";
import logo from "../assets/carts.svg";
import { NavLink } from "react-router";
import ROUTES from "../constants/routesNames";

const NavBar = () => {
  return (
    <div className="pt-8 h-24 border-b border-white flex flex-row justify-between items-center">
      <img src={logo} alt="Website Logo" />
      <nav>
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => (isActive ? "" : "")}
        >
          HOME
        </NavLink>
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => (isActive ? "" : "")}
        >
          HEADPHONES
        </NavLink>
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => (isActive ? "" : "")}
        >
          SPEAKERS
        </NavLink>
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) => (isActive ? "" : "")}
        >
          EARPHONES
        </NavLink>
      </nav>
      <img src={cartImage} alt="Cart Icon" />
    </div>
  );
};

export default NavBar;
