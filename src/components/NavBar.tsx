import cartImage from "../assets/carts.svg";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router";
import ROUTES from "../constants/routesNames";

type NavBarProps = {
  noBorder?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ noBorder }) => {
  return (
    <div className="px-[10%] h-24 bg-black ">
      <div
        className={`${!noBorder ? "border-b border-white" : ""} flex flex-row justify-between items-center h-full`}
      >
        <img src={logo} alt="Website Logo" />
        <nav className="flex flex-row justify-between gap-4 text-white">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) => (isActive ? "text-xs text-brown-1" : "text-xs")}
          >
            HOME
          </NavLink>
          <NavLink
            to={ROUTES.HEADPHONES}
            className={({ isActive }) => (isActive ? "text-xs text-brown-1" : "text-xs")}
          >
            HEADPHONES
          </NavLink>
          <NavLink
            to={ROUTES.SPEAKERS}
            className={({ isActive }) => (isActive ? "text-xs text-brown-1" : "text-xs")}
          >
            SPEAKERS
          </NavLink>
          <NavLink
            to={ROUTES.EARPHONES}
            className={({ isActive }) => (isActive ? "text-xs text-brown-1" : "text-xs")}
          >
            EARPHONES
          </NavLink>
        </nav>
        <img src={cartImage} alt="Cart Icon" />
      </div>
    </div>
  );
};

export default NavBar;
