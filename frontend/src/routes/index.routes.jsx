import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SuspenseWrapper from "../components/Lazy-Loading/Suspense-Wrapper";
import AuthRoute from "./auth.route";
import ProtectedRoutes from "./protected.route";
import PublicRoutes from "./public.routes";
import Loader from "../components/Loader/Loader";

const Profile = lazy(() => import("../screens/Profile/Profile"));
const About = lazy(() => import("../screens/About/About"));
const Admin = lazy(() => import("../screens/Admin/Admin"));
const Auth = lazy(() => import("../screens/Auth/Auth"));
const Booking = lazy(() => import("../screens/Booking/Booking"));
const Contact = lazy(() => import("../screens/Contact/Contact"));
const Food = lazy(() => import("../screens/Food/Food"));
const Home = lazy(() => import("../screens/Home/Home"));
const Landing = lazy(() => import("../screens/Landing/Landing"));
const Location = lazy(() => import("../screens/Location/Location"));
const Place = lazy(() => import("../screens/Place/Place"));

const routes = [
  {
    path: "/auth",
    element: <AuthRoute />,
    children: [{ index: true, element: SuspenseWrapper(Auth) }],
  },

  {
    path: "/",
    element: <PublicRoutes />,
    children: [
      { index: true, element: SuspenseWrapper(Landing) },
      {
        path: "home",
        element: SuspenseWrapper(Home),
      },
      {
        path: "about",
        element: SuspenseWrapper(About),
      },
      {
        path: "location",
        element: SuspenseWrapper(Location),
      },
      {
        path: "contact",
        element: SuspenseWrapper(Contact),
      },
    ],
  },

  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "rooms",
        children: [
          {
            index: true,
            element: SuspenseWrapper(Place),
          },
          {
            path: "book",
            element: SuspenseWrapper(Booking),
          },
        ],
      },
      {
        path: "profile",
        element: SuspenseWrapper(Profile),
      },
      {
        path: "foods/:id",
        element: SuspenseWrapper(Food),
      },
      {
        path: "admin",
        element: SuspenseWrapper(Admin),
      },
    ],
  },
];

const AppRoutes = () => {
  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
    },
  });
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader />}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default AppRoutes;
