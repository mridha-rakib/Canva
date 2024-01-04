import { createBrowserRouter, RouterProvider } from "react-router-dom";

// internal components
// import Index from "./pages";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Templates from "./components/Templates";
import Project from "./components/Project";

import CreateDesign from "./components/CreateDesign";
import Main from "./pages/Main";

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
  {
    path: "/design/create",
    element: <CreateDesign />,
  },
  {
    path: "/design/:id/edit",
    element: <Main />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
