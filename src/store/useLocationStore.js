import { create } from "zustand";
import { locationService } from "../api";

const useLocationStore = create((set, get) => ({
  listData: [],
  location: [],
  error: null,

  type: null,
  searchName: "",
  lastParams: null,

  setType: (key) => set({ type: key }),
  setSearchName: (name) => set({ searchName: name }),

  fetchList: async (params) => {
    const { lastParams } = get();

    if (lastParams === params) {
      return;
    }

    set({ lastParams: params });
    set({ loading: true, error: null });
    try {
      const result = await locationService.getLocationList(params);
      set({ listData: result });
      return result;
    } catch (error) {
      set({ listData: [] });
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchLocation: async (params) => {
    set({ loading: true, error: null });
    try {
      const result = await locationService.getLocation(params);
      set({ location: result });
      return result;
    } catch (error) {
      set({ location: [] });
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  resetLocation: () => set({ location: [] }),
}));

export default useLocationStore;
