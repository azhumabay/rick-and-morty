import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist((set) => ({
    isDarkMode: true,

    setDarkTheme: () => set(() => ({ isDarkMode: true })),
    setLightTheme: () => set(() => ({ isDarkMode: false })),
  }))
);

export default useThemeStore;
