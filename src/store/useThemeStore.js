import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      isDarkMode: true,
      isGridView: false,

      setDarkTheme: () => set(() => ({ isDarkMode: true })),
      setLightTheme: () => set(() => ({ isDarkMode: false })),

      toggleGridView: () => set((state) => ({ isGridView: !state.isGridView })),
    }),
    { name: "theme" }
  )
);

export default useThemeStore;
