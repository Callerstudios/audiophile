import NavBar from "../components/NavBar"
import ProductDetail from "../components/ProductDetail"
import database from "../db.json"

const Headphones = () => {
  const product = database.data[2]
  const imageUrl = `${new URL(product.image.desktop, import.meta.url).href}`; 
  return (
    <div>
      <header className="h-84 bg-black px-[10%]">
        <NavBar />
        <h2 className="mt-25 text-white text-center">
          headphones
        </h2>
      </header>
      <section>
        <ProductDetail
          details={product.description}
          image={imageUrl}
          productName={product.name}
        />
      </section>
    </div>
  );
}

export default Headphones