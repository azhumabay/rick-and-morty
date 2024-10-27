import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./router/router.jsx";
import GlobalStyles from "@components/styled/Global.js";
import useThemeStore from "./store/useThemeStore.js";
import { darkTheme, lightTheme } from "./const/theme.js";

const App = () => {
  const { isDarkMode } = useThemeStore();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(<App />);
