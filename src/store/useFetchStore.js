import { create } from "zustand";

const useFetchStore = create((set) => ({
  response: [],
  loading: false,
  error: null,

  fetchData: async (fetchAPI) => {
    set({ loading: true, error: null });
    try {
      const result = await fetchAPI();
      set({ response: result });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useFetchStore;
