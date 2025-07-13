import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  id: number;
  email: string;
  username: string;
  // password intentionally not stored
  phone: string;
  __v: number;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
};

type UserState = {
  user: Omit<User, 'password'> | null;
  setUser: (user: User) => void;
  clearUserState: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        const { password, ...userWithoutPassword } = user;
        set({ user: userWithoutPassword });
      },
      clearUserState: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
    }
  )
);
