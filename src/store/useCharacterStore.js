import { create } from "zustand";

const useCharacterStore = create((set) => ({
  pages: null,

  setPages: (pagesNum) => set({ pages: pagesNum }),
}));

export default useCharacterStore;
