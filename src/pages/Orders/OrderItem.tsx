import Image from "@/components/Core/Image"
import { IOrder } from "@/store/auth"

interface IProps {
  order: IOrder
}
export default function OrderItem({ order }: IProps) {
  return (
    <li className="p-5 rounded-md min-h-[100px] flex items-center border border-slate-200 mb-4">
      <div className="flex items-center gap-4">
        <Image src={order.product.image.url} className="h-[100px] w-[100px] rounded" />
        <div>
          <p>{order.product.title}</p>
          <p>{order.price} Eg</p>
          <p>({order.quantity}) Quantity</p>

        </div>
      </div>
    </li>
  )
}
