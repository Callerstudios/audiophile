import AudioGear from "../components/AudioGear";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductDetail from "../components/ProductDetail";
import { JoinedProducts } from "../components/Products";
import database from "../db.json";

const Speakers = () => {
  const product = database.data;
  return (
    <div>
      <header className="h-84 bg-black">
        <NavBar />
        <h2 className="mt-25 text-white text-center">Speakers</h2>
      </header>
      <section className=" px-[10%] pt-20 flex flex-col gap-20">
        <ProductDetail
          details={product[5].description}
          image={new URL(product[5].image.desktop, import.meta.url).href}
          isNew={true}
          productName={product[5].name}
          imageRight={false}
          productId={product[5].id}
          />
        <ProductDetail
          details={product[4].description}
          image={new URL(product[4].image.desktop, import.meta.url).href}
          productName={product[4].name}
          imageRight={true}
          productId={product[4].id}
        />
        <JoinedProducts />
      </section>
      <AudioGear />
      <Footer />
    </div>
  );
};

export default Speakers;
