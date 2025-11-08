import { useNavigate } from "react-router-dom";
import Button1 from "./Button1";
import { useScreenSize } from "../hooks/useScreenSize";

type ProductProps = {
  image: string;
  productName: string;
  details: string;
  isNew?: boolean;
  imageRight?: boolean;
  productId: number;
};

const ProductDetail: React.FC<ProductProps> = ({
  image,
  productName,
  details,
  isNew,
  imageRight = false,
  productId,
}) => {
  const screen = useScreenSize();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row text-center gap-5 md:gap-20 w-full justify-between items-center">
      <img
        src={image}
        alt=""
        className={`h-120 md:max-w-[50%] md:h-full object-center object-cover ${imageRight ? "order-2" : ""}`}
      />
      <div
        className={`max-w-111 flex flex-col gap-10 ${imageRight ? "order-1" : ""}`}
      >
        {isNew && <p className="text-brown-1 wide-word">NEW PRODUCT</p>}
        <h2>{productName}</h2>
        <p className="opacity-50">{details}</p>
        <Button1
          content="see product"
          onClick={() => {
            navigate(`/product/${productId}`);
          }}
          center={screen === "mobile"}
          type="primary"
        />
      </div>
    </div>
  );
};

export default ProductDetail;
