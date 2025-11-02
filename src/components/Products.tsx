import headphoneImage from "../assets/product-xx99-mark-one-headphones/desktop/image-product.png";
import speakerImage from "../assets/product-zx7-speaker/desktop/image-product.png";
import earphoneImage from "../assets/product-yx1-earphones/desktop/image-product.png";
import Product from "./Product";
import styles from "./ComponentsStyle.module.css";
import curves from "../assets/backgrounds/curve.png";
import speakerImage2 from "../assets/product-zx9-speaker/desktop/image-product.png";
import Button1 from "./Button1";

const Products = () => {
  return (
    <section className="px-[10%] flex flex-col gap-20 ">
      <div className="flex flex-row gap-5 justify-between items-center">
        <Product image={headphoneImage} name="headphones" />
        <Product image={speakerImage} name="speakers" />
        <Product image={earphoneImage} name="earphones" />
      </div>
      <div
        className={`${styles.speakerBg} w-full h-140 bg-no-repeat bg-cover aspect-video relative`}
      >
        <img src={curves} alt="Curves" className="absolute inset-0 z-0" />
        <div className="flex flex-row gap-20 items-center h-full">
          <div className="w-fit flex flex-row self-end">
            <img src={speakerImage2} className="" alt="Speaker Image" />
          </div>
          <div
            className="flex flex-col max-w-87 gap-4 text-white w-3/6  h-fit z-1"
            style={{ marginTop: "100px" }}
          >
            <h1>ZX9 SPEAKER</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button1
              content="SEE PRODUCT"
              type="black"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.speakerBg2} h-80 w-full flex flex-row bg-black items-center pl-[10%]`}>
        <div className="w-fit flex flex-col gap-6"> 
          <h5>ZX7 SPEAKER</h5>
          <Button1 content="see product" onClick={() => {}} type="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Products;
