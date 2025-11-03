import { useNavigate } from "react-router-dom";
import Button1 from "./Button1";
import ROUTES from "../constants/routesNames";

type MayLikeProps = {
  image: string;
  productName: string;
  productId: string;
};

const MayLike: React.FC<MayLikeProps> = ({ image, productName, productId }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-88 flex flex-col items-center gap-5">
      <img src={image} alt="" />
      <h5>{productName}</h5>
      <Button1
        content="see product"
        onClick={() => {
          navigate(`${ROUTES.EMPTY_PRODUCT}/${productId}`);
        }}
        type="primary"
      />
    </div>
  );
};

export default MayLike;
