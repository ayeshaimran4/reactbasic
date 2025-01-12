import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "../Components/form/Form";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/",
    element: <Layout />,
    children:[
      {path:"/home", element:<Home/>},
      {path:"about", element:<About/>},
      {path:"contact", element:<Contact/>}
    ]
  },
  
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
