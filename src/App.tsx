import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MantineProvider, Text, Group, Button, AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navigation from "./components/Navigation";
import Projects from "./pages/Projects";
import Biography from "./pages/Biography";
import Contact from "./pages/Contact";
import "./App.css";

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        textAlign: "center",
        padding: "2rem",
      }}
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
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <AppShell header={{ height: 60 }} padding={0}>
          <AppShell.Header>
            <Navigation />
          </AppShell.Header>

          <AppShell.Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </Router>
    </MantineProvider>
  );
};

export default App;
