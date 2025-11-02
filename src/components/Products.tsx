import Product from "./Product"
import headphoneImage from "../assets/product-xx99-mark-one-headphones/desktop/image-product.png"

const Products = () => {
  return (
    <div>
        <Product image={headphoneImage} name="headphones"/>
    </div>
  )
}

export default Products