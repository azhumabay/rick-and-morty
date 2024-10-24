import { create } from "zustand";

const useCharacterStore = create((set) => ({
  pages: null,
  searchName: "",

  setPages: (pagesNum) => set({ pages: pagesNum }),
  setSearchName: (name) => set({ searchName: name }),
}));

export default useCharacterStore;
