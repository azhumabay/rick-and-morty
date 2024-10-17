import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import GlobalStyles from "./Components/styles/Global.js";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);
