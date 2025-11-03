import { useNavigate } from "react-router-dom";
import Button1 from "./Button1";
import NumberSelector from "./form_elements/NumberSelector/NumberSelector";

type ProductProps = {
  image: string;
  productName: string;
  details: string;
  isNew?: boolean;
  imageRight?: boolean;
  productId: number;
  price: number;
};

const ProductDetailCart: React.FC<ProductProps> = ({
  image,
  productName,
  details,
  isNew,
  imageRight = false,
  productId,
  price,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-20 w-full justify-between items-center">
      <img
        src={image}
        alt=""
        className={`h-120 min-w-[50%] object-cover basis-0.5 ${imageRight ? "order-2" : ""}`}
      />
      <div
        className={`max-w-111 flex flex-col gap-5 ${imageRight ? "order-1" : ""}`}
      >
        {isNew && <p className="text-brown-1 wide-word">NEW PRODUCT</p>}
        <h2>{productName}</h2>
        <p className="opacity-50">{details}</p>
        <h6>${price}</h6>
        <div className="flex flex-row gap-5">
          <NumberSelector onChange={() => {}} value={1} />
          <Button1
            content="add to cart"
            onClick={() => {
              navigate(`/product/${productId}`);
            }}
            type="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCart;
