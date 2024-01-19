import { create } from 'zustand';
import { $http } from '@/api';
import Cookies from 'js-cookie';

interface IUser {
  name: string;
  email: string;
}

interface State {
  token: string;
  user: IUser;
  loading: boolean
}

interface Actions {
  login: (data: IUser) => Promise<void>;
}

export const useAuthStore = create<State & Actions>((set) => ({
  token: Cookies.get('token') || '',
  user: { name: "", email: "" },
  loading: false,
  login: async (data) => {
    set((state) => ({
      ...state,
      loading: true
    }));

    try {
      const res = await $http.post({ url: 'admins/login', data }) as { data: { token: string } }
      const token: string = res.data.token
      Cookies.set('token', token)
      set((state) => ({ ...state, token, loading: false }))
      return Promise.resolve()
    } finally {
      set((state) => ({ ...state, loading: false }))
    }
  },
}));
