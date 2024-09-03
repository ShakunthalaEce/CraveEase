import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header.js";
import Body from "./src/Components/Body.js";
import Footer from "./src/Components/Footer.js";
// import AboutUs from "./src/Components/AboutUs.js";
import Error from "./src/Components/Error.js";
import Contact from "./src/Components/Contact.js";
import MenuComponent from "./src/Components/MenuComponent.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./src/Components/Grocery.js";

const Grocery = lazy(()=>
  import("./src/Components/Grocery.js"));

const AboutUs = lazy(()=>
  import("./src/Components/AboutUs.js"));



const AppLayout = () => {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (<Suspense fallback={<h1>Loading...</h1>}><AboutUs /></Suspense>),
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/menu/:resId",
        element:<MenuComponent/>,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
