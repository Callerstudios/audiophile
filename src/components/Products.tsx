import { useNavigate } from "react-router-dom";
import curves from "../assets/backgrounds/curve.png";
import headphoneImage from "../assets/product-xx99-mark-one-headphones/desktop/image-product.png";
import earphoneImage2 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import earphoneImage from "../assets/product-yx1-earphones/desktop/image-product.png";
import speakerImage from "../assets/product-zx7-speaker/desktop/image-product.png";
import speakerImage2 from "../assets/product-zx9-speaker/desktop/image-product.png";
import ROUTES from "../constants/routesNames";
import Button1 from "./Button1";
import styles from "./ComponentsStyle.module.css";
import Product from "./Product";

const Products = () => {
  const navigate = useNavigate()
  return (
    <section className="px-[10%] flex flex-col gap-20">
      <JoinedProducts />
      <div
        className={`${styles.speakerBg} w-full  bg-no-repeat bg-cover aspect-video relative pb-5 px-5 gap-5`}
      >
        <img src={curves} alt="Curves" className="absolute inset-0 z-0" />
        <div className="flex flex-col md:flex-row gap-5 text-center md:gap-20 items-center h-full">
          <div className="w-fit flex flex-row self-end">
            <img src={speakerImage2} className="" alt="Speaker Image" />
          </div>
          <div className="flex flex-col max-w-87 gap-4 text-white md:w-3/6 h-fit z-1 md:mt-25 ">
            <h1 className="text-4xl md:text-6xl">ZX9 SPEAKER</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button1
              content="SEE PRODUCT"
              center
              type="black"
              onClick={() => {
                navigate(`${ROUTES.EMPTY_PRODUCT}/6`);
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={`${styles.speakerBg2} h-80 w-full flex flex-row bg-black items-center pl-[10%]`}
      >
        <div className="w-fit flex flex-col gap-6">
          <h5>ZX7 SPEAKER</h5>
          <Button1
            content="see product"
            onClick={() => {
              navigate(`${ROUTES.EMPTY_PRODUCT}/5`);
            }}
            type="secondary"
          />
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row items-stretch gap-5 md:gap-15">
        <img
          src={earphoneImage2}
          alt="Earphone Image"
          className="aspect-video w-full md:w-1/2  rounded-sm "
        />
        <div className="flex flex-col gap-6 w-full md:w-3/6 justify-center bg-gray-1 min-h-50 p-5 lg:p-20 asp rounded-sm ">
          <h5>YX1 EARPHONES</h5>
          <Button1
            content="see product"
            onClick={() => {
              navigate(`${ROUTES.EMPTY_PRODUCT}/1`);
            }}
            type="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;

export const JoinedProducts = () => {
  return (
    <div className="flex flex-col px-[10%] md:px-0 md:flex-row gap-5 justify-between items-center">
      <Product image={headphoneImage} name="headphones" navUrl={ROUTES.HEADPHONES} />
      <Product image={speakerImage} name="speakers" navUrl={ROUTES.SPEAKERS} />
      <Product image={earphoneImage} name="earphones" navUrl={ROUTES.EARPHONES} />
    </div>
  );
};
