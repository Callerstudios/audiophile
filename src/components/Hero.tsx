import { useNavigate } from "react-router-dom";
import { useScreenSize } from "../hooks/useScreenSize";
import Button1 from "./Button1";
import NavBar from "./NavBar";
import styles from "./styles/Hero.module.css"
import ROUTES from "../constants/routesNames";

const Hero = () => {
  const screen = useScreenSize()
  const navigate = useNavigate()
  const bgUrl = `../../assets/home/${screen}/image-header.jpg`;
  return (
    <div
      className={`${styles.hero} bg-cover bg-no-repeat w-full aspect-video pb-20`}
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <NavBar />
      <div className="mx-auto md:mx-[10%] mt-30 flex flex-col max-w-82 md:max-w-110 gap-3 text-white overflow-x-hiddenf text-center">
        <p className="opacity-50">NEW PRODUCT</p>
        <h1 className="text-4xl md:text-6xl">XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button1 center content="SEE PRODUCT" type="primary" onClick={() => {navigate(ROUTES.HEADPHONES)}} />
      </div>
    </div>
  );
};

export default Hero;
