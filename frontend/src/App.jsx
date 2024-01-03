import { createBrowserRouter, RouterProvider } from "react-router-dom";

// internal components
// import Index from "./pages";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Templates from "./components/Templates";
import Project from "./components/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/templates",
        element: <Templates />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
