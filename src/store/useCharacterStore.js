import { create } from "zustand";
import { characterService } from "../api";

const useCharacterStore = create((set) => ({
  listData: [],
  character: {},
  error: null,
  loading: false,

  searchName: "",
  gender: "",
  status: "",

  setSearchName: (name) => set({ searchName: name }),
  setGender: (queryGender) => set({ gender: queryGender }),
  setStatus: (queryStatus) => set({ status: queryStatus }),
  resetCharacter: () => set({ character: {} }),

  fetchList: async (params) => {
    set({ loading: true, error: null });
    try {
      const result = await characterService.getCharacterList(params);
      set({ listData: result });
      return result;
    } catch (error) {
      set({ listData: [] });
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  fetchCharacter: async (params) => {
    set({ loading: true, error: null });
    try {
      const result = await characterService.getCharacter(params);
      set({ character: result });
      return result;
    } catch (error) {
      set({ character: [] });
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCharacterStore;
