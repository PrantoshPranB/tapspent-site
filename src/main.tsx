import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./app/pages/Home.tsx";
import About from "./app/pages/About.tsx";
import PrivacyPolicy from "./app/pages/PrivacyPolicy.tsx";
import TermsOfUse from "./app/pages/TermsOfUse.tsx";
import "./styles/index.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
  