import { Each } from "@/components/Core/Each"
import { useAuth } from "@/store/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import OrderItem from "./OrderItem"

export default function Orders() {
  const authStore = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!authStore.token) {
      navigate('/')
    }
  }, [authStore.token])

  if (authStore.user.orders.length === 0) {
    return <div className='min-h-screen container flex items-center justify-center'>
      <h1 className="text-primary text-[30px] capitalize">no orders sent</h1>
    </div>
  }
  return (
    <div className='min-h-screen'>
      <div className="container mt-10">
        <ul>
          <Each of={authStore.user.orders || []} render={(item) => (
            <>
              <OrderItem order={item} />
            </>
          )} />
        </ul>
      </div>
    </div>
  )
}
