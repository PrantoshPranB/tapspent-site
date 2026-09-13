import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router";
import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "./app/pages/Home.tsx";
import PrivacyPolicy from "./app/pages/PrivacyPolicy.tsx";
import TermsOfUse from "./app/pages/TermsOfUse.tsx";
import Support from "./app/pages/Support.tsx";
import CardBoxHome from "./app/pages/cardbox/CardBoxHome.tsx";
import CardBoxPrivacy from "./app/pages/cardbox/CardBoxPrivacy.tsx";
import CardBoxTerms from "./app/pages/cardbox/CardBoxTerms.tsx";
import CardBoxSupport from "./app/pages/cardbox/CardBoxSupport.tsx";
import DewDriftHome from "./app/pages/dewdrift/DewDriftHome.tsx";
import DewDriftPrivacy from "./app/pages/dewdrift/DewDriftPrivacy.tsx";
import DewDriftTerms from "./app/pages/dewdrift/DewDriftTerms.tsx";
import DewDriftSupport from "./app/pages/dewdrift/DewDriftSupport.tsx";
import DewDriftMeet from "./app/pages/dewdrift/DewDriftMeet.tsx";
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
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/support" element={<Support />} />

        <Route path="/cardbox" element={<CardBoxHome />} />
        <Route path="/cardbox/privacy" element={<CardBoxPrivacy />} />
        <Route path="/cardbox/terms" element={<CardBoxTerms />} />
        <Route path="/cardbox/support" element={<CardBoxSupport />} />

        <Route path="/dewdrift" element={<DewDriftHome />} />
        <Route path="/dewdrift/privacy" element={<DewDriftPrivacy />} />
        <Route path="/dewdrift/terms" element={<DewDriftTerms />} />
        <Route path="/dewdrift/support" element={<DewDriftSupport />} />
        {/* Where a race invitation lands when the app is not installed. */}
        <Route path="/dewdrift/meet" element={<DewDriftMeet />} />
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
  