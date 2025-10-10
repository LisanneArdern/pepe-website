import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MantineProvider, Text, Group, Button, Burger, Stack } from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import Projects from "./pages/Projects";
import Biography from "./pages/Biography";
import Contact from "./pages/Contact";
import "./App.css";

const Navigation: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const navItems = [
    { label: "Proyectos", path: "/projects" },
    { label: "Biografía", path: "/biography" },
    { label: "Contacto", path: "/contact" },
  ];

  const navContent = (
    <Group gap="lg" align="center">
      {navItems.map((item) => (
        <Text
          key={item.path}
          component={Link}
          to={item.path}
          size="md"
          style={{ 
            color: "white",
            textDecoration: "none",
            cursor: "pointer"
          }}
        >
          {item.label}
        </Text>
      ))}
      <Group gap="xs">
        <Text
          size="sm"
          style={{
            color: "#999",
            cursor: "pointer",
            fontWeight: 400,
          }}
        >
          ESP
        </Text>
        <Text
          size="sm"
          style={{
            color: "white",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          EN
        </Text>
      </Group>
    </Group>
  );

  return (
    <>
      <div
        style={{
          backgroundColor: "#2c2c2c",
          border: "none",
          height: "60px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <Group h="100%" justify="center" px="xl" style={{ width: "100%" }} gap="xl">
          <Text
            size="lg"
            fw={700}
            style={{ color: "white", cursor: "pointer" }}
            component={Link}
            to="/projects"
          >
            Jose Avila
          </Text>

          {isMobile ? (
            <Group gap="sm">
            <Group gap="xs">
              <Text
                size="sm"
                style={{
                  color: "#999",
                  cursor: "pointer",
                  fontWeight: 400,
                }}
              >
                ESP
              </Text>
              <Text
                size="sm"
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                EN
              </Text>
            </Group>
              <Burger opened={opened} onClick={toggle} size="sm" color="white" />
            </Group>
          ) : (
            navContent
          )}
        </Group>
      </div>

      {/* Mobile Menu */}
      {isMobile && opened && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            backgroundColor: "#2c2c2c",
            borderTop: "1px solid #444",
            zIndex: 999,
            padding: "1rem",
          }}
        >
          <Stack gap="md">
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                variant="subtle"
                size="md"
                style={{ 
                  color: "white",
                  justifyContent: "flex-start",
                  height: "48px"
                }}
                onClick={toggle}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </div>
      )}
    </>
  );
};

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
        <div style={{ minHeight: "100vh" }}>
          <Navigation />
          <div style={{ paddingTop: "60px" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </MantineProvider>
  );
};

export default App;
