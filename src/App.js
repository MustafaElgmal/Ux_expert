import "./App.css";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ColorPalletDetails from "./pages/ColorPalletDetails";
import ColorPalletFromLogo from "./pages/ColorPalletFromLogo";
import ColorPallet from "./pages/ColorPallet";
import UiPatterns from "./pages/ui patterns/UiPatterns";
import CreateDesign from "./pages/CreateDesign";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import Uipatternsform from "./pages/uipatternsform/Uipatternsform";
import Profile from "./pages/Profile";
import Designernav from "./component/Designernav/Designernav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search/:type",
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
  {
    path: "/createdesign",
    element: <CreateDesign />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/forms",
    element: <Uipatternsform />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/test",
    element: <Designernav/>,
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
