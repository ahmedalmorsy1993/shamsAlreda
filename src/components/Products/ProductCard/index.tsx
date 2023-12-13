import Button from "@/components/Button";
import { Props } from "./model";

export default function ProductCard({ product }: Props) {
  return (
    <div className="shadow-md transition-all duration-500 hover:shadow-lg rounded h-[400px] overflow-hidden relative flex flex-col justify-between">
      {product.bestSeller && <span className="inline-block py-2 px-4 rounded bg-red-800 capitalize text-white left-0 animate-bounce absolute top-2">best seller</span>}

      <section>
        <div className="h-[200px] w-full">
          <img src={product.image} alt="photo" className="object-contain h-full w-full" />
        </div>
        <div>
          <h3 className="pt-7  text-center">{product.title}</h3>
        </div>

      </section>
      <div className="mx-2 my-4">
        <Button classNames="capitalize hover:bg-white hover:border-red-800 hover:border hover:text-red-800">
          add to card
        </Button>
      </div>
    </div>
  )
}
