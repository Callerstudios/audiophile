import Button1 from "./Button1";

type ProductProps = {
    image: string;
    productName: string;
    details: string;
    isNew?: boolean;
    imageRight?:boolean
}

const ProductDetail: React.FC<ProductProps> = ({image, productName, details, isNew, imageRight = false}) => {
  return (
    <div className="flex flex-row gap-20 w-full justify-between items-center">
      <img
        src={image}
        alt=""
        className={`h-120 min-w-[50%] object-cover basis-0.5 ${imageRight ? "order-2" : ""}`}
      />
      <div
        className={`max-w-111 flex flex-col gap-2 ${imageRight ? "order-1" : ""}`}
      >
        {isNew && <p className="text-brown-1 wide-word">NEW PRODUCT</p>}
        <h2>{productName}</h2>
        <p>{details}</p>
        <Button1 content="see product" onClick={() => {}} type="primary" />
      </div>
    </div>
  );
}

export default ProductDetail