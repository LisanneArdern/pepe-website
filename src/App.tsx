import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Navigation from "./components/Navigation";
import Projects from "./pages/Projects";
import Biography from "./pages/Biography";
import Contact from "./pages/Contact";
import ProjectPlaceholder from "./pages/ProjectPlaceholder";
import "./App.css";
import "./i18n";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/projects" replace />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectPlaceholder />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
};

export default App;
