import Loader from "@/components/Loader"
import ProductCard from "../ProductCard"
import useProduct from "./useProduct"

export default function ProductList() {
  const { products, loading } = useProduct()
  return (
    <div className="container mt-6">
      {!loading ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((product, index) => (
          <div key={index} >
            <ProductCard product={product} />
          </div>
        ))}
      </div>) :
        <Loader />


      }


    </div>
  )
}
