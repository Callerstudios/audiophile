import { useParams } from "react-router-dom"
import db from "../db.json"

const ProductPage = () => {
    const {productId} = useParams()
    const data = db.data.find(d=>d.id === Number(productId))
    if(!data){
        return <h1>No Data</h1>
    }
  return (
    <div>ProductPage {data?.id}</div>
  )
}

export default ProductPage