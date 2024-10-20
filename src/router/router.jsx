import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import APP_PATH from "../const/router";
import {
  CharacterPage,
  CharacterListPage,
  EpisodesPage,
  LocationPage,
  SettingsPage,
} from "../pages";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to={APP_PATH.CHARACTERS} replace /> },
      { path: APP_PATH.CHARACTERS, element: <CharacterListPage /> },
      { path: `${APP_PATH.CHARACTERS}/:id`, element: <CharacterPage /> },
      { path: APP_PATH.LOCATIONS, element: <LocationPage /> },
      { path: APP_PATH.EPISODES, element: <EpisodesPage /> },
      { path: APP_PATH.SETTINGS, element: <SettingsPage /> },
    ],
  },
  // { path: "*", element: <Navigate to={APP_PATH.CHARACTERS} replace /> },
]);

export default router;
