import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MantineProvider, Text, Group, Button, Box } from "@mantine/core";
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

const HomePage: React.FC = () => {
  return (
    <Box
      display="flex"
      style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}
      mih="60vh"
      ta="center"
      p="calc(2rem + 60px) 2rem 2rem"
    >
      <Text size="3rem" fw={700} mb="md">
        Welcome to My Portfolio
      </Text>
      <Text size="lg" c="dimmed" mb="xl" maw={600}>
        I'm a passionate full-stack developer creating innovative web solutions.
      </Text>
      <Group gap="md">
        <Button component={Link} to="/projects" size="lg">
          View My Projects
        </Button>
        <Button component={Link} to="/contact" variant="outline" size="lg">
          Get In Touch
        </Button>
      </Group>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
