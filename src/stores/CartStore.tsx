import { create } from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

interface CartStore {
  UniqueItems: { [email: string]: number };
  CartItems: { [email: string]: CartItem[] };
  removeFromCart: (email:string,id:number) => void;
  updateQuantity: (email: string, id: number, quantity: number) => void;
  addCartItem: (email: string, item: CartItem) => void;
}

const useCartStore = create<CartStore>()((set) => ({
  UniqueItems: {},
  CartItems: {},
  
  removeFromCart: (email: string, id: number) => {
    set((state) => {
      const updatedCartItems = state.CartItems[email]?.filter(
        (item) => item.id !== id
      ) || [];
      return {
        CartItems: {
          ...state.CartItems,
          [email]: updatedCartItems,
        },
        UniqueItems: {
          ...state.UniqueItems,
          [email]: Math.max(0, state.UniqueItems[email] - 1),
        },
      };
    });
  },

  updateQuantity: (email: string, id: number, quantity: number) => {
    set((state) => {
      const updatedCartItems = state.CartItems[email]?.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ) || [];
      return {
        CartItems: {
          ...state.CartItems,
          [email]: updatedCartItems,
        },
      };
    });
  },

  addCartItem: (email: string, item: CartItem) => {
    set((state) => {
      const existingItem = state.CartItems[email]?.find(
        (cartItem) => cartItem.id === item.id
      );
      
      let updatedCartItems: CartItem[];
      
      if (existingItem) {
        // If item exists, update quantity
        updatedCartItems = state.CartItems[email].map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item
        updatedCartItems = [...(state.CartItems[email] || []), item];
      }
      
      return {
        CartItems: {
          ...state.CartItems,
          [email]: updatedCartItems,
        },
        UniqueItems: {
          ...state.UniqueItems,
          [email]: (state.UniqueItems[email] || 0) + (existingItem ? 0 : 1),
        },
      };
    });
  },
}));

export default useCartStore;
