import { create } from "zustand";

const useSearchStore = create((set) => ({
  isSearchOpen: false,

  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),
  
}));

export default useSearchStore;
