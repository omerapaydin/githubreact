import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/details/:id", element: <Details /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
