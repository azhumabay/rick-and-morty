import { create } from "zustand";

const useCharacterStore = create((set) => ({
  isCharacterFilterOpen: false,
  pages: null,
  searchName: "",
  gender: "",
  status: "",

  setPages: (pagesNum) => set({ pages: pagesNum }),
  setSearchName: (name) => set({ searchName: name }),

  openCharacterFilter: () => set({ isCharacterFilterOpen: true }),
  closeCharacterFilter: () => set({ isCharacterFilterOpen: false }),

  setGender: (queryGender) => set({ gender: queryGender }),
  setStatus: (queryStatus) => set({ status: queryStatus }),
}));

export default useCharacterStore;
