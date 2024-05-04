import { $http } from "@/api";
// import { TUser } from "@/pages/Users/types";
import { create } from "zustand";

type TRole = {
  id: number;
  name: string
}
export interface IOrder {
  quantity: number;
  price: number;
  order: { id: number, created_at: string };
  product: { title: string; price: number; quantity: number; image: { url: string } }

}
interface IUser {
  email: string;
  first_name: string
  last_name: string
  id: number
  role: TRole
  orders: IOrder[]
  [key: string]: any
}

export type TSignupData = {
  first_name: string
  last_name: string
  email: string
  password: string

}

interface Actions {
  login: (data: { email: string; password: string }) => Promise<unknown>,
  signup: (data: TSignupData) => Promise<unknown>,
  profile: () => Promise<unknown>,
  logout: () => void,
}
interface State {
  token: string | null;
  user: IUser
}

export const useAuth = create<State & Actions>(set => ({
  token: localStorage.getItem('token') || null,
  user: {
    id: 1,
    first_name: "",
    last_name: "",
    email: "",
    role: {
      name: "",
      id: 0
    },
    orders: []
  },
  async login(data) {
    const res = await $http.post<{ data: { token: string } }>({ url: 'login', data })
    const { token } = res.data
    set(state => ({ ...state, token }))
    localStorage.setItem('token', token)
    return Promise.resolve()
  },
  signup(data) {
    return $http.post<{ data: { token: string } }>({ url: 'register', data })
  },
  async profile() {
    const res = await $http.get<{ data: IUser }>({ url: 'profile' })
    const { data } = res
    set(state => ({ ...state, user: data }))

  },
  async logout() {
    set(state => ({ ...state, token: null }))
    localStorage.removeItem('token')
  },
}))