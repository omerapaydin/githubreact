import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import MainLayout from "./layouts/MainLayout";
import Search from "./components/SearchBar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/details", element: <Home /> },
      { path: "/details/:id", element: <Details /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
