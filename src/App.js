import "./App.css";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ColorPalletDetails from "./pages/ColorPalletDetails";
import ColorPalletFromLogo from "./pages/ColorPalletFromLogo";
import ColorPallet from "./pages/ColorPallet";
import UiPatterns from "./pages/UiPatterns";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchResults />,
  },
  {
    path: "/colorPalletFromLogo",
    element: <ColorPalletFromLogo />,
  },
  {
    path: "/colorPalletDetails",
    element: <ColorPalletDetails />,
  },
  {
    path: "/colorPallet",
    element: <ColorPallet />,
  },
  {
    path: "/uiPattern",
    element: <UiPatterns />,
  },
]);

function App() {
  return (
    <div className="App bg-[#FAF8F8]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
