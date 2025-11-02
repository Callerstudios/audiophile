import type React from "react";

type ProductProps = {
    image: string;
    name: string;
}

const Product: React.FC<ProductProps> = ({image, name}) => {
  return (
    <div className="w-88 h-71  relative flex flex-col">
      <img
        src={image}
        alt={`${name} Image`}
        className="w-30 absolute top-10 left-3/6 -translate-x-1/2
"
      />
      <div className="h-50 mt-auto rounded-lg bg-gray-1">
        <h6>{name}</h6>
      </div>
    </div>
  );
}

export default Product