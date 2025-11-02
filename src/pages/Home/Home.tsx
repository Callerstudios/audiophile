import Hero from "../../components/Hero";
import Products from "../../components/Products";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Products/>
    </div>
  );
};

export default Home;
