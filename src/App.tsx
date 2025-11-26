import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FBXLanding } from "./components/FBXLanding";
import { CasesPage } from "./components/CasesPage";
import { AboutPage } from "./components/AboutPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FBXLanding />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
