import { useNavigate, useParams } from "react-router-dom";
import db from "../db.json";
import NavBar from "../components/NavBar";
import ProductDetailCart from "../components/ProductDetailCart";
import headphone1 from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import headphone2 from "../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import speakerImage from "../assets/product-zx7-speaker/desktop/image-product.jpg";
import MayLike from "../components/MayLike";
import { JoinedProducts } from "../components/Products";
import AudioGear from "../components/AudioGear";
import Footer from "../components/Footer";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const screenType = "desktop";
  const data = db.data.find((d) => d.id === Number(productId));
  if (!data) {
    return <h1>No Data</h1>;
  }
  return (
    <div>
      <NavBar noBorder={true} />
      <section className="px-[10%] mt-20">
        <p
          className="opacity-50 mb-5 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Go Back
        </p>
        <ProductDetailCart
          details={data.description}
          image={data.image.desktop}
          price={data.price}
          productId={data.id}
          productName={data.name}
          isNew
        />
      </section>
      <section className="px-[10%] mt-20 flex flex-row gap-30">
        <div className="max-w-160 flex flex-col gap-5">
          <h3>FEATURES</h3>
          <p className="opacity-50">{data.features}</p>
        </div>
        <div className="flex flex-col gap-5">
          <h3>IN THE BOX</h3>
          <ul>
            {data.includes.map((d) => {
              return (
                <li className="flex flex-row gap-5">
                  <span className="text-brown-1">{d.quantity}x</span>
                  <span className="opacity-50">{d.item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="px-[10%] mt-20 flex flex-row gap-8 h-[540px] overflow-hidden">
        <div className="basis-1/2 flex flex-col justify-between gap-5 h-full">
          <div className="flex-1 overflow-hidden rounded-lg  ">
            <img
              src={data.gallery.first[screenType]}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-lg aspect-video">
            <img
              src={data.gallery.second[screenType]}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="basis-1/2 h-full overflow-hidden rounded-lg">
          <img
            src={data.gallery.third[screenType]}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="px-[10%] mt-20 flex flex-col gap-5">
        <h3>you may also like</h3>
        <div className="flex flex-row gap-8">
          <MayLike image={headphone1} productId="2" productName="XX99 MARK I" />
          <MayLike image={headphone2} productId="1" productName="XX59" />
          <MayLike
            image={speakerImage}
            productId="4"
            productName="ZX9 SPEAKER"
          />
        </div>
        <JoinedProducts/>
      </section>
      <AudioGear/>
      <Footer/>
    </div>
  );
};

export default ProductPage;
