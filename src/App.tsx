import OgImage from "../src/assets/ogImage.jpg"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PixelPage from "./pages/PixelPage";

const router = createBrowserRouter([
  {
    path: "/pixel",
    element: <PixelPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <>
      <meta property="og:image" content={OgImage}></meta>
      <RouterProvider router={router} />
    </>
  )
}

export default App
