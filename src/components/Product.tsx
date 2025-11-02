import type React from "react";
import Button2 from "./Button2";
import blurShadow from "../assets/product-xx99-mark-one-headphones/desktop/blur-shadow.png"

type ProductProps = {
  image: string;
  name: string;
};

const Product: React.FC<ProductProps> = ({ image, name }) => {
  return (
    <div className="w-88 h-71  relative flex flex-col">
      <img
        src={image}
        alt={`${name} Image`}
        className="w-30 absolute top-9 left-3/6 -translate-x-1/2"
      />
      <img
        src={blurShadow}
        alt={`${name} Image`}
        className="w-30 absolute top-30 left-3/6 -translate-x-1/2"
      />
      <div className="h-50 mt-auto rounded-lg bg-gray-1 pt-30 flex flex-col items-center">
        <h6>{name}</h6>
        <Button2 content="SHOP" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Product;
