import { create } from "zustand";

const useLocationStore = create((set) => ({
  locationFilter: true,
  type: null,

  openFilter: () => set({ locationFilter: true }),
  closeFilter: () => set({ locationFilter: false }),

  setType: (key) => set({ type: key }),
}));

export default useLocationStore;
