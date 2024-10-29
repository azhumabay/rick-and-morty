import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./router/router.jsx";
import GlobalStyles from "@components/styled/Global.js";
import useThemeStore from "./store/useThemeStore.js";
import { darkTheme, lightTheme } from "./const/theme.js";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <SkeletonTheme
        baseColor={
          isDarkMode ? darkTheme.colors.primary : lightTheme.colors.primary
        }
        highlightColor={
          isDarkMode ? darkTheme.colors.secondary : lightTheme.colors.secondary
        }
      >
        <RouterProvider router={router} />
      </SkeletonTheme>
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(<App />);
