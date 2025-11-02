import AudioGear from "../../components/AudioGear";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Products />
      <AudioGear />
      <Footer/>
    </div>
  );
};

export default Home;
