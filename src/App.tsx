import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MantineProvider, Text, Group, Button, Burger } from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { IconUser, IconBriefcase, IconMail } from "@tabler/icons-react";
import Projects from "./pages/Projects";
import Biography from "./pages/Biography";
import Contact from "./pages/Contact";
import "./App.css";
import "./i18n";

const Navigation: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t("navigation.projects"), path: "/projects", icon: IconBriefcase },
    { label: t("navigation.biography"), path: "/biography", icon: IconUser },
    { label: t("navigation.contact"), path: "/contact", icon: IconMail },
  ];

  const navContent = (
    <Group gap="sm">
      {navItems.map((item) => (
        <Button
          key={item.path}
          component={Link}
          to={item.path}
          variant="subtle"
          size="sm"
          style={{ color: "white" }}
        >
          {item.label}
        </Button>
      ))}
      <Group gap="xs" style={{ marginLeft: "2rem" }}>
        <Text
          size="sm"
          style={{
            color: i18n.language === "es" ? "white" : "#999",
            cursor: "pointer",
          }}
          onClick={() => i18n.changeLanguage("es")}
        >
          ESP
        </Text>
        <Text
          size="sm"
          style={{
            color: i18n.language === "en" ? "white" : "#999",
            cursor: "pointer",
          }}
          onClick={() => i18n.changeLanguage("en")}
        >
          EN
        </Text>
      </Group>
    </Group>
  );

  return (
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
      <Group h="100%" justify="space-between" px="xl" style={{ width: "100%" }}>
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
                  color: i18n.language === "es" ? "white" : "#999",
                  cursor: "pointer",
                }}
                onClick={() => i18n.changeLanguage("es")}
              >
                ESP
              </Text>
              <Text
                size="sm"
                style={{
                  color: i18n.language === "en" ? "white" : "#999",
                  cursor: "pointer",
                }}
                onClick={() => i18n.changeLanguage("en")}
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
  );
};

const HomePage: React.FC = () => {
  const { t } = useTranslation();

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
        {t("home.title")}
      </Text>
      <Text size="lg" c="dimmed" mb="xl" maw={600}>
        {t("home.subtitle")}
      </Text>
      <Group gap="md">
        <Button component={Link} to="/projects" size="lg">
          {t("home.viewProjects")}
        </Button>
        <Button component={Link} to="/contact" variant="outline" size="lg">
          {t("home.getInTouch")}
        </Button>
      </Group>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <div style={{ minHeight: "100vh", paddingTop: "60px" }}>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
};

export default App;
