import { create } from "zustand";
import { episodeService } from "../api";

const useEpisodeStore = create((set) => ({
  listData: [],
  episode: null,
  loading: false,
  error: false,
  searchName: "",

  setSearchName: (name) => set({ searchName: name }),
  resetEpisode: () => set({ episode: [] }),

  fetchList: async (params) => {
    set({ loading: true, error: null });
    try {
      const result = await episodeService.getEpisodeList(params);
      set({ listData: result });
      return result;
    } catch (error) {
      set({ listData: [] });
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchEpisode: async (params) => {
    set({ loading: true, error: null });
    try {
      const result = await episodeService.getEpisode(params);
      set({ episode: result });
      return result;
    } catch (error) {
      set({ episode: [] });
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useEpisodeStore;
