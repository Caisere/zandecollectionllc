import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Testimonials from "./pages/Testimonials";
import Header from "./components/Header";
import Layout from "./components/Layout";
import TermsAndConditions from "./pages/TermsAndConditions";
import Privacy from "./pages/Privacy";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
    
        element: <HomePage/>,
      },
      {
        path: "about-us",
        element: <AboutUs/>,
      },
      {
        path: "testimonials",
        element: <Testimonials/>,
      },
      {
        path: "terms",
        element: <TermsAndConditions/>,
      },
      {
        path: "copy-of-terms-and-conditions",
        element: <Privacy/>,
      },
    ]
  }
  

]);


export default function MyApp() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
    
  )};