import GoogleFirstPage from "@/components/google-first-page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GoogleFirstPage />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

export const RouteProvider = () => <RouterProvider router={router} />;
