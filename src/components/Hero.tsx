import NavBar from "./NavBar";
import styles from "./styles/Hero.module.css"

const Hero = () => {
  return (
    <div
      className={`${styles.hero} bg-cover bg-no-repeat w-full h-screen aspect-video`}
    >
      <NavBar />
    </div>
  );
};

export default Hero;
