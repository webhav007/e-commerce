import { create } from "zustand";

interface NavStore {
  showPopupCart: boolean;
  showPopupHistory: boolean;
  setshowPopupCart: (value: boolean) => void;
  setshowPopupHistory: (value: boolean) => void;
}

const usePopupStore = create<NavStore>((set) => ({
  showPopupCart: false,
  showPopupHistory: false,
  setshowPopupCart: (value: boolean) =>
    set(() => ({
      showPopupCart: value,
    })),
  setshowPopupHistory: (value: boolean) =>
    set(() => ({
      showPopupHistory: value,
    })),
}));

export default usePopupStore;
