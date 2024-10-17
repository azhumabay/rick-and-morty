import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import CharactersPage from "../pages/CharactersPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ index: true, element: <CharactersPage /> }],
  },
]);

export default router;
