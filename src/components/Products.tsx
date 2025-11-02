import headphoneImage from "../assets/product-xx99-mark-one-headphones/desktop/image-product.png";
import speakerImage from "../assets/product-zx7-speaker/desktop/image-product.png";
import earphoneImage from "../assets/product-yx1-earphones/desktop/image-product.png";
import Product from "./Product";
import styles from "./ComponentsStyle.module.css"
import curves from "../assets/backgrounds/curve.png"

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
        <img src={curves} alt="Curves" className="absolute inset-0" />
      </div>
    </section>
  );
};

export default Products;
