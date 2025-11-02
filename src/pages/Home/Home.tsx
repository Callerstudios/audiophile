import AudioGear from "../../components/AudioGear";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Products />
      <AudioGear />
    </div>
  );
};

export default Home;
