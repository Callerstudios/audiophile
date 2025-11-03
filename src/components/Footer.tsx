import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import ROUTES from "../constants/routesNames";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg"
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg"
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg"

const Footer = () => {
  return (
    <footer className="px-[10%] py-10 bg-black flex flex-col gap-10">
      <div className="flex flex-col gap-5 items-center md:flex-row justify-between">
        <img src={logo} className="w-35" alt="Website Logo" />
        <nav className="flex flex-col md:flex-row justify-between gap-5 text-white">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) => (isActive ? "text-xs" : "text-xs")}
          >
            HOME
          </NavLink>
          <NavLink
            to={ROUTES.HEADPHONES}
            className={({ isActive }) => (isActive ? "text-xs" : "text-xs")}
          >
            HEADPHONES
          </NavLink>
          <NavLink
            to={ROUTES.SPEAKERS}
            className={({ isActive }) => (isActive ? "text-xs" : "text-xs")}
          >
            SPEAKERS
          </NavLink>
          <NavLink
            to={ROUTES.EARPHONES}
            className={({ isActive }) => (isActive ? "text-xs" : "text-xs")}
          >
            EARPHONES
          </NavLink>
        </nav>
      </div>
      <div className="flex flex-col gap-5 md:flex-row justify-between">
        <div className="opacity-50 text-white max-w-135 text-sm flex flex-col gap-15">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
            <img src={facebookIcon} alt="Facebook Icon" />
            <img src={twitterIcon} alt="Twitter Icon" />
            <img src={instagramIcon} alt="Instagram Icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
