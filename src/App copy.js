import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/helpertLoad/HelpertLoad";
import Login from "./pages/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Feed from "./pages/Feed";
import Recommendation from "./pages/Recommendation";
import Register from "./pages/Register";
import CompleteProfile from "./pages/CompleteProfile";
import ResetPassword from "./pages/ResetPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import SignInGoogle from "./pages/SignInGoogle";
import EditProfile from "./pages/EditProfile";
import Profile from "./pages/Profile";
import Homepage from "./pages/Homepage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Test from "./pages/Test";
import Setting from "./pages/Setting"
import Category from "./pages/Category";
import Sujal from "./pages/sujal"
import Settings from "./pages/settingsPage/Settings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/terms-of-service",
          element: <TermsAndConditions />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/readymadesignin",
          element: <SignInGoogle />,
        },
        {
          path: "/completeprofile",
          element: <CompleteProfile />,
        },
        {
          path: "/createnewpassword",
          element: <CreateNewPassword />,
        },
        {
          path: "/resetpassword",
          element: <ResetPassword />,
        },
        {
          path: "/feed",
          element: <Feed />,
        },
        {
          path: "/recommendation",
          element: <Recommendation />,
        },
        {
          path: "/editprofile",
          element: <EditProfile />
        },

        {
          path: `/profile`,
          element: <Profile />
        },
        {
          path: "/privacypolicy",
          element: <PrivacyPolicy />
        },
        {
          path: "/test",
          element: <Test />
        },
        {

          path: '/category',
          element: <Category />

        }, {
          path: "/sujal",
          element: <Sujal />
        }, {
          path: "/setting",
          element: <Setting />
        },
        {
          path:"/settings",
          element:<Settings/>
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
