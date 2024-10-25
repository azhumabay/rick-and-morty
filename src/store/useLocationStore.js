import { create } from "zustand";

const useLocationStore = create((set) => ({
  locationFilter: false,
  type: null,
  locationName: "",
  currentPage: "1",

  openFilter: () => set({ locationFilter: true }),
  closeFilter: () => set({ locationFilter: false }),

  setType: (key) => set({ type: key }),
  setLocationName: (name) => set({ locationName: name }),
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useLocationStore;
