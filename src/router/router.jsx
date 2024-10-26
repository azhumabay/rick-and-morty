import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import APP_PATH from "../const/router";
import {
  CharacterPage,
  CharacterListPage,
  SettingsPage,
  LocationListPage,
  LocationPage,
  EpisodeListPage,
  EpisodePage,
  SplashScreen,
} from "../pages";

const router = createBrowserRouter([
  { path: APP_PATH.MAIN, element: <SplashScreen /> },
  {
    element: <AppLayout />,
    children: [
      { path: APP_PATH.CHARACTERS, element: <CharacterListPage /> },
      { path: `${APP_PATH.CHARACTERS}/:id`, element: <CharacterPage /> },

      { path: APP_PATH.LOCATIONS, element: <LocationListPage /> },
      { path: `${APP_PATH.LOCATIONS}/:id`, element: <LocationPage /> },

      { path: APP_PATH.EPISODES, element: <EpisodeListPage /> },
      { path: `${APP_PATH.EPISODES}/:id`, element: <EpisodePage /> },

      { path: APP_PATH.SETTINGS, element: <SettingsPage /> },
    ],
  },
  { path: "*", element: <Navigate to={APP_PATH.CHARACTERS} replace /> },
]);

export default router;
