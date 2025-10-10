import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Text, Group, Burger, Stack, NavLink } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconBriefcase, IconUser, IconMail } from "@tabler/icons-react";

interface NavigationProps {
  onBurgerClick?: () => void;
  mobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ onBurgerClick, mobile = false }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();

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

  const navContent = (
    <Group gap="lg" align="center">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          component={Link}
          to={item.path}
          label={item.label}
          leftSection={<item.icon size={16} />}
          active={location.pathname === item.path}
          variant="subtle"
          style={{
            color: navStyles.textColor,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: navStyles.backgroundColor === "white" 
                ? "rgba(0, 0, 0, 0.1)" 
                : "rgba(255, 255, 255, 0.1)",
            },
            "&[data-active]": {
              backgroundColor: navStyles.backgroundColor === "white" 
                ? "rgba(0, 0, 0, 0.2)" 
                : "rgba(255, 255, 255, 0.2)",
              color: navStyles.textColor,
            }
          }}
        />
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

  return (
    <>
      <div
        style={{
          backgroundColor: navStyles.backgroundColor,
          border: "none",
          height: "60px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
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
              <Burger opened={opened} onClick={toggle} size="sm" color={navStyles.textColor} />
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
            backgroundColor: navStyles.backgroundColor,
            borderTop: `1px solid ${navStyles.backgroundColor === "white" ? "#ddd" : "#444"}`,
            zIndex: 999,
            padding: "1rem",
            boxShadow: navStyles.backgroundColor === "white" 
              ? "0 2px 4px rgba(0, 0, 0, 0.1)" 
              : "0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Stack gap="xs">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                component={Link}
                to={item.path}
                label={item.label}
                leftSection={<item.icon size={16} />}
                active={location.pathname === item.path}
                variant="subtle"
                onClick={toggle}
                style={{
                  color: navStyles.textColor,
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: navStyles.backgroundColor === "white" 
                      ? "rgba(0, 0, 0, 0.1)" 
                      : "rgba(255, 255, 255, 0.1)",
                  },
                  "&[data-active]": {
                    backgroundColor: navStyles.backgroundColor === "white" 
                      ? "rgba(0, 0, 0, 0.2)" 
                      : "rgba(255, 255, 255, 0.2)",
                    color: navStyles.textColor,
                  }
                }}
              />
            ))}
          </Stack>
        </div>
      )}
    </>
  );
};

export default Navigation;
