import Button1 from "./Button1";
import NumberSelector from "./form_elements/NumberSelector/NumberSelector";

type ProductProps = {
  image: string;
  productName: string;
  details: string;
  isNew?: boolean;
  imageRight?: boolean;
  price: number;
  onAddToCart: (amount: number )=> void
  count: number
  setCount: (val: number)=>void
};

const ProductDetailCart: React.FC<ProductProps> = ({
  image,
  productName,
  details,
  isNew,
  imageRight = false,
  price,
  onAddToCart, count, setCount
}) => {
  
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full justify-between items-center">
      <img
        src={image}
        alt={productName}
        className={`h-120 min-w-[50%] object-cover basis-0.5 ${imageRight ? "order-2" : ""}`}
      />
      <div
        className={`max-w-111 flex flex-col gap-5 ${imageRight ? "order-1" : ""}`}
      >
        {isNew && <p className="text-brown-1 wide-word">NEW PRODUCT</p>}
        <h2>{productName}</h2>
        <p className="opacity-50">{details}</p>
        <h6>${price}</h6>
        <div className="flex flex-row gap-5 w-full justify-between">
          <NumberSelector
            onChange={(val) => {
              setCount(val);
            }}
            value={count}
          />
          <Button1
            content="add to cart"
            onClick={() => {
              onAddToCart(count)
            }}
            type="primary"
          />
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetailCart;


