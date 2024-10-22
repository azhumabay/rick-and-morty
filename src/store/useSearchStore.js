import { create } from "zustand";

const useSearchStore = create((set) => ({
  isSearchOpen: false,
  isFilterOpen: false,

  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  openFilter: () => set({ isFilterOpen: true }),
  closeFilter: () => set({ isFilterOpen: false }),
}));

export default useSearchStore;
