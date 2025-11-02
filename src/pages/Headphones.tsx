import NavBar from "../components/NavBar"
import ProductDetail from "../components/ProductDetail"
import database from "../db.json"
import testImage from "../assets/product-zx7-speaker/desktop/image-product.jpg"

const Headphones = () => {
  const product = database.data[2]
  const imageUrl = new URL(product.image.desktop, import.meta.url).href; 
  return (
    <div>
      <header className="h-184 bg-black px-[10%]">
        <NavBar />
        <h2 className="mt-25 text-white text-center">
          headphones {testImage} \n{imageUrl} . . . {product.image.desktop}
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