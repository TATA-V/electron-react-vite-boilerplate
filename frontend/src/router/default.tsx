import MainPage from 'src/pages/MainPage';
import SettingsPage from 'src/pages/SettingsPage';

export const defaultRoutes = [
  { path: '/', element: <MainPage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '*', element: <div>404 Not Found</div> },
];
