import { $http } from "@/api";
// import { TUser } from "@/pages/Users/types";
import { create } from "zustand";

type TRole = {
  id: number;
  name: string
}
interface IUser {
  email: string;
  first_name: string
  last_name: string
  id: number
  role: TRole
}

interface Actions {
  login: (data: { email: string; password: string }) => Promise<unknown>,
  profile: () => Promise<unknown>,
  logout: () => void,
}
interface State {
  token: string | null;
  // user: TUser
}

export const useAuth = create<State & Actions>(set => ({
  token: localStorage.getItem('token') || null,
  user: {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    role: {
      name: "",
      id: 0
    }
  },
  async login(data) {
    const res = await $http.post<{ data: { token: string } }>({ url: 'login', data })
    const { token } = res.data
    set(state => ({ ...state, token }))
    localStorage.setItem('token', token)
    return Promise.resolve()
  },
  async profile() {
    const res = await $http.get<{ data: IUser }>({ url: 'profile' })
    const { data } = res
    set(state => ({ ...state, user: data }))

  },
  async logout() {
    // await $http.post({ url: 'logout', data: {} })
    set(state => ({ ...state, token: null }))
    localStorage.removeItem('token')
  },
}))