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

  // Desktop navigation content for header
  const desktopNavContent = (
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

  // Mobile navigation content for navbar
  const mobileNavContent = (
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
          onClick={onBurgerClick}
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

  // If mobile prop is true, render mobile navbar content
  if (mobile) {
    return mobileNavContent;
  }

  // Otherwise render header content
  return (
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
              opened={false} 
              onClick={onBurgerClick} 
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
  );
};

export default Navigation;
