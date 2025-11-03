import AudioGear from "../../components/AudioGear";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Products from "../../components/Products";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Products />
      <AudioGear />
      <Footer/>
    </div>
  );
};

export default Home;
