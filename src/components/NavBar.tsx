import { useState } from "react";
import cartImage from "../assets/carts.svg";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router";
import ROUTES from "../constants/routesNames";
import hamburgerIcon from "../assets/hamburger.svg";
import closeIcon from "../assets/close.svg"; // 🧩 add a close icon
import { CartPreview } from "../pages/ProductPage";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

type NavBarProps = {
  noBorder?: boolean;
  noBg?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ noBorder, noBg }) => {
  const cartData = useSelector((state: RootState) => state.cart);
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`md:px-[10%] h-20 ${noBg ? "bg-transparent" : "bg-black"} w-full max-w-full relative`}
    >
      {showCart && (
        <CartPreview items={cartData} closeCart={() => setShowCart(false)} />
      )}
      <div
        className={`${!noBorder ? "border-b border-white" : ""} px-[5%] md:px-0 flex justify-between items-center h-full`}
      >
        {/* Left: Hamburger or Close (mobile only) */}
        <div className="md:hidden">
          <img
            src={menuOpen ? closeIcon : hamburgerIcon}
            alt="Menu Toggle"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {/* Center: Logo */}
        <img src={logo} alt="Logo" className="w-24 md:w-32" />

        {/* Nav links (desktop) */}
        <nav className="hidden md:flex gap-6 text-white text-sm tracking-widest">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) =>
              isActive ? "text-brown-1" : "hover:text-brown-1"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to={ROUTES.HEADPHONES}
            className={({ isActive }) =>
              isActive ? "text-brown-1" : "hover:text-brown-1"
            }
          >
            HEADPHONES
          </NavLink>
          <NavLink
            to={ROUTES.SPEAKERS}
            className={({ isActive }) =>
              isActive ? "text-brown-1" : "hover:text-brown-1"
            }
          >
            SPEAKERS
          </NavLink>
          <NavLink
            to={ROUTES.EARPHONES}
            className={({ isActive }) =>
              isActive ? "text-brown-1" : "hover:text-brown-1"
            }
          >
            EARPHONES
          </NavLink>
        </nav>

        {/* Right: Cart */}
        <div className="w-10 h-10 cursor-pointer relative flex flex-row justify-center items-center ">
          {cartData.length > 0 && (
            <div className="bg-brown-1 w-6 h-6 text-center  rounded-full text-white absolute -right-2 -top-2">
              {cartData.length}
            </div>
          )}
          <img
            src={cartImage}
            alt="Cart"
            className=""
            onClick={() => setShowCart(true)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col gap-6 py-6 text-center border-t border-gray-700 md:hidden z-50">
          <NavLink
            to={ROUTES.HOME}
            className="hover:text-brown-1"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to={ROUTES.HEADPHONES}
            className="hover:text-brown-1"
            onClick={() => setMenuOpen(false)}
          >
            HEADPHONES
          </NavLink>
          <NavLink
            to={ROUTES.SPEAKERS}
            className="hover:text-brown-1"
            onClick={() => setMenuOpen(false)}
          >
            SPEAKERS
          </NavLink>
          <NavLink
            to={ROUTES.EARPHONES}
            className="hover:text-brown-1"
            onClick={() => setMenuOpen(false)}
          >
            EARPHONES
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
