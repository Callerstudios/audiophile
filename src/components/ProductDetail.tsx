import Button1 from "./Button1";

type ProductProps = {
    image: string;
    productName: string;
    details: string;
}

const ProductDetail: React.FC<ProductProps> = ({image, productName, details}) => {
  return (
    <div>
      <img src={image} alt="" className="h-140" />
      <div>
        <p>NEW PRODUCT</p>
        <h2>{productName}</h2>
        <p>
          {details}
        </p>
        <Button1 content="see product" onClick={()=>{}} type="primary"/>
      </div>
    </div>
  );
}

export default ProductDetail