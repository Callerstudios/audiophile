import { useScreenSize } from "../hooks/useScreenSize";
import Button1 from "./Button1";
import NavBar from "./NavBar";
import styles from "./styles/Hero.module.css"

const Hero = () => {
  const screen = useScreenSize()
  const bgUrl = `../../assets/home/${screen}/image-header.jpg`;
  return (
    <div
      className={`${styles.hero} bg-cover bg-no-repeat w-full aspect-video pb-20`}
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <NavBar />
      <div className="mx-auto md:mx-[10%] mt-30 flex flex-col max-w-82 gap-3 text-white overflow-x-hiddenf text-center">
        <p className="opacity-50">NEW PRODUCT</p>
        <h1 className="text-4xl">XX99 Mark II Headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button1 center content="SEE PRODUCT" type="primary" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Hero;
