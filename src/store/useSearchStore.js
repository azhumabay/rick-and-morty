import { create } from "zustand";

const useSearchStore = create((set) => ({
  isSearchOpen: false,
  isFilterOpen: true,
  gender: "",
  status: "",

  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  openFilter: () => set({ isFilterOpen: true }),
  closeFilter: () => set({ isFilterOpen: false }),

  setGender: (queryGender) => set({ gender: queryGender }),
  setStatus: (queryStatus) => set({ status: queryStatus }),
}));

export default useSearchStore;
