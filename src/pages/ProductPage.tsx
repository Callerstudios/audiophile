import { useNavigate, useParams } from "react-router-dom";
import db from "../db.json";
import NavBar from "../components/NavBar";
import ProductDetailCart from "../components/ProductDetailCart";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate()
  const data = db.data.find((d) => d.id === Number(productId));
  if (!data) {
    return <h1>No Data</h1>;
  }
  return (
    <div>
      <NavBar noBorder={true} />
      <section className="px-[10%] mt-20">
      <p className="opacity-50 mb-5 cursor-pointer" onClick={()=>navigate(-1)}>Go Back</p>
      <ProductDetailCart
        details={data.description}
        image={data.image.desktop}
        price={data.price}
        productId={data.id}
        productName={data.name}
        isNew
        />
        </section>
    </div>
  );
};

export default ProductPage;
