import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Pages/LayoutPage/Layout";
import AboutPage from "./Pages/AboutPages/AboutPage";
import OurSolutionsPage from "./Pages/OurSolutionsPage/OurSolutionsPage";
import OurExperiencePage from "./Pages/OurExperiencePages/OurExperiencePage";
import GalleryPage from "./Pages/GalleryPage/GalleryPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import GSPIntroduction from "./Pages/AboutPages/GSPIntroduction";
import GSPInformation from "./Pages/AboutPages/GSPInformation";
import OrganizationalChart from "./Pages/AboutPages/OrganizationalChart";
import OurManPower from "./Pages/AboutPages/OurManPower";
import OwnedMachines from "./Pages/AboutPages/OwnedMachines";
import FinancialStatus from "./Pages/AboutPages/FinancialStatus";
import LeadershipPage from "./Pages/AboutPages/LeadershipPage";

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "about",
          element: <AboutPage />,
          children: [
            { path: "/about/leadership", element: <LeadershipPage /> },
            { path: "/about/gsp-introduction", element: <GSPIntroduction /> },
            { path: "/about/gsp-information", element: <GSPInformation /> },
            { path: "/about/organizational-chart", element: <OrganizationalChart /> },
            { path: "/about/our-man-power", element: <OurManPower /> },
            { path: "/about/owned-machines", element: <OwnedMachines /> },
            { path: "/about/financial-status", element: <FinancialStatus /> },
          ],
        },
        { path: "ourSolutions", element: <OurSolutionsPage /> },
        { path: "ourExperience", element: <OurExperiencePage /> },
        { path: "gallery", element: <GalleryPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
