import AudioGear from "../components/AudioGear";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductDetail from "../components/ProductDetail";
import { JoinedProducts } from "../components/Products";
import database from "../db.json";
import { useScreenSize } from "../hooks/useScreenSize";

const Headphones = () => {
  const screenType = useScreenSize()
  const product = database.data;
  return (
    <div>
      <header className="h-84 bg-black">
        <NavBar />
        <h2 className="mt-25 text-white text-center">headphones</h2>
      </header>
      <section className=" px-[10%] pt-20 flex flex-col gap-30">
        <ProductDetail
          details={product[3].description}
          image={new URL(product[3].image[screenType], import.meta.url).href}
          isNew={true}  
          productName={product[3].name}
          imageRight={false}
          productId={product[3].id}
          />
        <ProductDetail
          details={product[2].description}
          image={new URL(product[2].image[screenType], import.meta.url).href}
          productName={product[2].name}
          imageRight={true}
          productId={product[2].id}
          />
        <ProductDetail
          details={product[1].description}
          image={new URL(product[1].image[screenType], import.meta.url).href}
          productName={product[1].name}
          imageRight={false}
          productId={product[1].id}
        />
      <JoinedProducts/>
      </section>
      <AudioGear/>
      <Footer/>
    </div>
  );
};

export default Headphones;
