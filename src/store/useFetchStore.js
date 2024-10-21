import { create } from "zustand";

const useFetchStore = create((set) => ({
  response: [],
  loading: false,
  error: null,

  fetchData: async (fetchAPI, params) => {
    set({ loading: true, error: null });
    try {
      const result = await fetchAPI(params);
      set({ response: result });
      return result;
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useFetchStore;
