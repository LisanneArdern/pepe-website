import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Text, Group, Burger, Stack } from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { IconBriefcase, IconUser, IconMail } from "@tabler/icons-react";

const Navigation: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(false);

  const navItems = [
    { label: "Proyectos", path: "/projects", icon: IconBriefcase },
    { label: "Biografía", path: "/biography", icon: IconUser },
    { label: "Contacto", path: "/contact", icon: IconMail },
  ];

  // Get navigation styles based on current page
  const getNavigationStyles = () => {
    const path = location.pathname;
    
    if (path === "/projects") {
      // Dark background with white text
      return {
        backgroundColor: "#2c2c2c",
        textColor: "white",
        languageInactiveColor: "#999",
        languageActiveColor: "white"
      };
    } else if (path === "/biography") {
      // White background with black text
      return {
        backgroundColor: "white",
        textColor: "black",
        languageInactiveColor: "#999",
        languageActiveColor: "black"
      };
    } else if (path === "/contact") {
      // Purple background with orange/red text
      return {
        backgroundColor: "#4B0082",
        textColor: "#FF6B35",
        languageInactiveColor: "#FF6B35",
        languageActiveColor: "#FF6B35"
      };
    } else {
      // Default (home page)
      return {
        backgroundColor: "#2c2c2c",
        textColor: "white",
        languageInactiveColor: "#999",
        languageActiveColor: "white"
      };
    }
  };

  const navStyles = getNavigationStyles();

  // Desktop navigation content for header
  const desktopNavContent = (
    <Group gap="lg" align="center">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            color: navStyles.textColor,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            borderRadius: "4px",
            transition: "background-color 0.2s",
            backgroundColor: location.pathname === item.path 
              ? (navStyles.backgroundColor === "white" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)")
              : "transparent",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            if (location.pathname !== item.path) {
              e.currentTarget.style.backgroundColor = navStyles.backgroundColor === "white" 
                ? "rgba(0, 0, 0, 0.1)" 
                : "rgba(255, 255, 255, 0.1)";
            }
          }}
          onMouseLeave={(e) => {
            if (location.pathname !== item.path) {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <item.icon size={16} />
          <span style={{ fontSize: "16px", fontWeight: location.pathname === item.path ? 600 : 400 }}>
            {item.label}
          </span>
        </Link>
      ))}
      <Group gap="xs">
        <Text
          size="sm"
          style={{
            color: navStyles.languageInactiveColor,
            cursor: "pointer",
            fontWeight: 400,
          }}
        >
          ESP
        </Text>
        <Text
          size="sm"
          style={{
            color: navStyles.languageActiveColor,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          EN
        </Text>
      </Group>
    </Group>
  );

  // Mobile navigation content for navbar
  const mobileNavContent = (
    <Stack gap="xs">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={toggle}
          style={{
            color: navStyles.textColor,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            borderRadius: "4px",
            transition: "background-color 0.2s",
            backgroundColor: location.pathname === item.path 
              ? (navStyles.backgroundColor === "white" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)")
              : "transparent",
          }}
          onMouseEnter={(e) => {
            if (location.pathname !== item.path) {
              e.currentTarget.style.backgroundColor = navStyles.backgroundColor === "white" 
                ? "rgba(0, 0, 0, 0.1)" 
                : "rgba(255, 255, 255, 0.1)";
            }
          }}
          onMouseLeave={(e) => {
            if (location.pathname !== item.path) {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <item.icon size={18} />
          <Text size="md" fw={location.pathname === item.path ? 600 : 400}>
            {item.label}
          </Text>
        </Link>
      ))}
      <Group gap="xs" mt="md">
        <Text
          size="sm"
          style={{
            color: navStyles.languageInactiveColor,
            cursor: "pointer",
            fontWeight: 400,
          }}
        >
          ESP
        </Text>
        <Text
          size="sm"
          style={{
            color: navStyles.languageActiveColor,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          EN
        </Text>
      </Group>
    </Stack>
  );

  return (
    <>
      <div
        style={{
          backgroundColor: navStyles.backgroundColor,
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: navStyles.backgroundColor === "white" 
            ? "0 2px 4px rgba(0, 0, 0, 0.1)" 
            : "0 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Group h="100%" justify="center" px="xl" style={{ width: "100%" }} gap="xl">
          <Text
            size="lg"
            fw={700}
            style={{ color: navStyles.textColor, cursor: "pointer" }}
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
                    color: navStyles.languageInactiveColor,
                    cursor: "pointer",
                    fontWeight: 400,
                  }}
                >
                  ESP
                </Text>
                <Text
                  size="sm"
                  style={{
                    color: navStyles.languageActiveColor,
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  EN
                </Text>
              </Group>
              <Burger 
                opened={opened} 
                onClick={toggle} 
                size="sm" 
                color={navStyles.textColor} 
                hiddenFrom="md"
              />
            </Group>
          ) : (
            desktopNavContent
          )}
        </Group>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && opened && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            backgroundColor: navStyles.backgroundColor,
            borderTop: `1px solid ${navStyles.backgroundColor === "white" ? "#ddd" : "#444"}`,
            zIndex: 999,
            padding: "1rem",
            boxShadow: navStyles.backgroundColor === "white" 
              ? "0 2px 4px rgba(0, 0, 0, 0.1)" 
              : "0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          {mobileNavContent}
        </div>
      )}
    </>
  );
};

export default Navigation;
