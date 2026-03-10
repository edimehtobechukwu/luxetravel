import { createBrowserRouter } from "react-router";
import Layout from "./layout";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Deals from "./pages/Deals";
import Premium from "./pages/Premium";
import Signup from "./pages/Signup";
import Booking from "./pages/Booking";
import BookingSuccess from "./pages/BookingSuccess";
import About from "./pages/About";
import Concierge from "./pages/Concierge";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "how-it-works", Component: HowItWorks },
      { path: "deals", Component: Deals },
      { path: "premium", Component: Premium },
      { path: "about", Component: About },
      { path: "concierge", Component: Concierge },
      { path: "contact", Component: Contact },
      { path: "booking-success", Component: BookingSuccess },
    ],
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/booking",
    Component: Booking,
  },
]);