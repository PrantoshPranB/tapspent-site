import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./app/pages/Home.tsx";
import About from "./app/pages/About.tsx";
import PrivacyPolicy from "./app/pages/PrivacyPolicy.tsx";
import TermsOfUse from "./app/pages/TermsOfUse.tsx";
import "./styles/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfUse />} />
    </Routes>
  );
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
  