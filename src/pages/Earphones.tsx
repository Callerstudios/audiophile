import AudioGear from "../components/AudioGear";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductDetail from "../components/ProductDetail";
import { JoinedProducts } from "../components/Products";
import database from "../db.json";

const Earphones = () => {
  const product = database.data;
  return (
    <div>
      <header className="h-84 bg-black">
        <NavBar />
        <h2 className="mt-25 text-white text-center">Earphones</h2>
      </header>
      <section className=" px-[10%] pt-20 flex flex-col gap-20">
        <ProductDetail
          details={product[0].description}
          image={new URL(product[0].image.desktop, import.meta.url).href}
          isNew={true}
          productName={product[0].name}
          imageRight={false}
          productId={product[0].id}
        />
        <JoinedProducts />
      </section>
      <AudioGear />
      <Footer />
    </div>
  );
};

export default Earphones;
