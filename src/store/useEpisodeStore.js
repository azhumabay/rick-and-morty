import { create } from "zustand";

const useEpisodeStore = create((set) => ({
  searchName: "",

  setSearchName: (name) => set({ searchName: name }),
}));

export default useEpisodeStore;
