import { create } from "zustand";
import { Product } from "./ProductStore";

interface WishlistItem extends Product {}

interface CartItem extends Product {
  quantity: number;
}

interface OrderHistoryItem extends Product {
  date: Date;
}

interface User {
  id: number;
  username: string;
  password: string;
  cart: CartItem[];
  wishlist: WishlistItem[];
  orderHistory: OrderHistoryItem[];
  member: "user" | "seller";
}

interface UserState {
  users: User[];
  addUser: (user: Omit<User, "id">) => void;
  updateUser: (id: number, user: Partial<Omit<User, "id">>) => void;
  removeUser: (id: number) => void;
  removeFromCart: (userId: number, productId: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: state.users.length + 1 }],
    })),

  updateUser: (id, user) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? { ...u, ...user } : u)),
    })),

  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),

  removeFromCart: (userId: number, productId: number) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === userId
          ? {
              ...user,
              cart: user.cart.filter((item) => item.id !== productId),
            }
          : user
      ),
    }));
  },
}));
