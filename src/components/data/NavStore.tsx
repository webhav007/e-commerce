import { create } from "zustand";

// Define the shape of your store's state
interface NavState {
  showPopup: boolean;
  setshowPopup: () => void;
}

const useNavStore = create<NavState>((set) => ({
  showPopup: false,
  setshowPopup: () =>
    set((state:any) => ({
      showPopup: state.showPopup ? false : true,
    })),
}));

export default useNavStore;
