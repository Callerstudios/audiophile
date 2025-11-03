import { useNavigate, useParams } from "react-router-dom";
import db from "../db.json";
import NavBar from "../components/NavBar";
import ProductDetailCart from "../components/ProductDetailCart";
import headphone1 from "../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import headphone2 from "../assets/product-xx59-headphones/desktop/image-product.jpg";
import speakerImage from "../assets/product-zx7-speaker/desktop/image-product.jpg";
import MayLike from "../components/MayLike";
import { JoinedProducts } from "../components/Products";
import AudioGear from "../components/AudioGear";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../app/store";
import type { Cart } from "../types/cartType";
import { addToCart, changeCountToBuy } from "../slices/cartSlice";
import { useEffect, useState } from "react";
import NumberSelector from "../components/form_elements/NumberSelector/NumberSelector";

const ProductPage = () => {
  const cartData = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams();
  const [count, setCount] = useState(1);
  const [showCart, setShowCart] = useState(true);
  const navigate = useNavigate();
  const screenType = "desktop";
  const data = db.data.find((d) => d.id === Number(productId));

  useEffect(() => {
    if (cartData.length > 0 && data) {
      const currentItem = cartData.find((c) => c.productId === String(data.id));
      if (currentItem) {
        setCount(currentItem.count);
      }
    }
  }, [cartData, data]);

  if (!data) {
    return <h1>No Data</h1>;
  }
  const itemAdded = () => {
    setShowCart(true);
    const product = cartData.find((c) => c.productId === String(data.id));
    if (product) {
      dispatch(
        changeCountToBuy({
          productId: String(data.id),
          count,
          imageUrl: data.image[screenType],
          price: data.price,
          productName: data.name,
        })
      );
    } else {
      dispatch(
        addToCart({
          productId: String(data.id),
          count,
          imageUrl: data.image[screenType],
          price: data.price,
          productName: data.name,
        })
      );
    }
  };

  return (
    <div>
      <NavBar noBorder={true} />
      <main className="relative">
        {showCart && (
          <CartPreview items={cartData} closeCart={() => setShowCart(false)} />
        )}
        <section className="px-[10%] mt-20">
          <p
            className="opacity-50 mb-5 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Go Back
          </p>
          <ProductDetailCart
            details={data.description}
            image={data.image.desktop}
            price={data.price}
            productName={data.name}
            onAddToCart={itemAdded}
            isNew
            count={count}
            setCount={setCount}
          />
        </section>
        <section className="px-[10%] mt-20 flex flex-row gap-30">
          <div className="max-w-160 flex flex-col gap-5">
            <h3>FEATURES</h3>
            <p className="opacity-50">{data.features}</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3>IN THE BOX</h3>
            <ul>
              {data.includes.map((d) => {
                return (
                  <li className="flex flex-row gap-5">
                    <span className="text-brown-1">{d.quantity}x</span>
                    <span className="opacity-50">{d.item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="px-[10%] mt-20 flex flex-row gap-8 h-[540px] overflow-hidden">
          <div className="basis-1/2 flex flex-col justify-between gap-5 h-full">
            <div className="flex-1 overflow-hidden rounded-lg  ">
              <img
                src={data.gallery.first[screenType]}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-lg aspect-video">
              <img
                src={data.gallery.second[screenType]}
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="basis-1/2 h-full overflow-hidden rounded-lg">
            <img
              src={data.gallery.third[screenType]}
              alt="Gallery"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="px-[10%] mt-20 flex flex-col gap-5">
          <h3>you may also like</h3>
          <div className="flex flex-row gap-8">
            <MayLike
              image={headphone1}
              productId="3"
              productName="XX99 MARK I"
            />
            <MayLike image={headphone2} productId="2" productName="XX59" />
            <MayLike
              image={speakerImage}
              productId="5"
              productName="ZX9 SPEAKER"
            />
          </div>
          <JoinedProducts />
        </section>
        <AudioGear />
        <Footer />
      </main>
    </div>
  );
};

export default ProductPage;

type CartPreviewProps = {
  items: Cart[];
  closeCart: () => void;
};

const CartPreview: React.FC<CartPreviewProps> = ({ items, closeCart }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50 px-[10%]"
      onClick={closeCart}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[350px] ml-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row justify-between">
          <h6 className="text-lg font-bold mb-4">Cart ({items.length})</h6>
          <p className="opacity-50">Remove all</p>
        </div>
        <div>
          {items.map((i) => (
            <div className="flex flex-row gap-2 items-center">
              <img
                className="max-w-16 rounded-xl"
                src={i.imageUrl}
                alt={i.productName}
              />
              <div className="flex-2">
                <p>{i.productName}</p>
                <p className="opacity-50">${i.price}</p>
              </div>
              <NumberSelector
                onChange={(val) => {
                  dispatch(
                    changeCountToBuy({
                      ...i,
                      count: val,
                    })
                  );
                }}
                value={i.count}
              />
            </div>
          ))}
        </div>
        <button className="mt-4 bg-brown-1 text-white w-full py-2 rounded cursor-pointer  ">
          Checkout
        </button>
      </div>
    </div>
  );
};
