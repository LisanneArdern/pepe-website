import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Text, Group, Burger, Stack, Box, UnstyledButton } from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { IconBriefcase, IconUser, IconMail, IconX } from "@tabler/icons-react";

type NavigationColors = {
  backgroundColor: string;
  textColor: string;
  languageInactiveColor: string;
  languageActiveColor: string;
};

const DEFAULT_NAV_STYLES: NavigationColors = {
  backgroundColor: "#2c2c2c",
  textColor: "white",
  languageInactiveColor: "#999",
  languageActiveColor: "white",
};

const NAV_STYLES_BY_PATH: Record<string, NavigationColors> = {
  "/projects": DEFAULT_NAV_STYLES,
  "/biography": {
    backgroundColor: "white",
    textColor: "black",
    languageInactiveColor: "#999",
    languageActiveColor: "black",
  },
  "/contact": {
    backgroundColor: "#4B0082",
    textColor: "#FF6B35",
    languageInactiveColor: "#FF6B35",
    languageActiveColor: "#FF6B35",
  },
};

const Navigation: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [opened, { toggle }] = useDisclosure(false);
  const hideTopBarOnMobileMenuOpen = isMobile && opened;
  const closeMenu = () => {
    if (opened) {
      toggle();
    }
  };

  const navItems = [
    { label: t("navigation.projects"), path: "/projects", icon: IconBriefcase },
    { label: t("navigation.biography"), path: "/biography", icon: IconUser },
    { label: t("navigation.contact"), path: "/contact", icon: IconMail },
  ];

  const navStyles = NAV_STYLES_BY_PATH[location.pathname] ?? DEFAULT_NAV_STYLES;

  const menuPanelContent = (
    <Stack gap="xs">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={closeMenu}
          style={{
            color: navStyles.textColor,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            borderRadius: "4px",
            transition: "background-color 0.2s",
            backgroundColor:
              location.pathname === item.path
                ? navStyles.backgroundColor === "white"
                  ? "rgba(0, 0, 0, 0.1)"
                  : "rgba(255, 255, 255, 0.1)"
                : "transparent",
          }}
          onMouseEnter={(e) => {
            if (location.pathname !== item.path) {
              e.currentTarget.style.backgroundColor =
                navStyles.backgroundColor === "white"
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
        <UnstyledButton
          aria-label="Switch language to Spanish"
          aria-pressed={i18n.language === "es"}
          onClick={() => i18n.changeLanguage("es")}
          style={{
            color:
              i18n.language === "es"
                ? navStyles.languageActiveColor
                : navStyles.languageInactiveColor,
            cursor: "pointer",
            fontWeight: i18n.language === "es" ? 600 : 400,
            fontSize: "0.875rem",
          }}
        >
          ESP
        </UnstyledButton>
        <UnstyledButton
          aria-label="Switch language to English"
          aria-pressed={i18n.language === "en"}
          onClick={() => i18n.changeLanguage("en")}
          style={{
            color:
              i18n.language === "en"
                ? navStyles.languageActiveColor
                : navStyles.languageInactiveColor,
            cursor: "pointer",
            fontWeight: i18n.language === "en" ? 600 : 400,
            fontSize: "0.875rem",
          }}
        >
          EN
        </UnstyledButton>
      </Group>
    </Stack>
  );

  return (
    <>
      <Box
        pos="fixed"
        top={0}
        left={0}
        right={0}
        h={60}
        display="flex"
        style={{
          zIndex: hideTopBarOnMobileMenuOpen ? 1197 : 1200,
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0 0.9rem" : "0 1.5rem",
          pointerEvents: "none",
          opacity: hideTopBarOnMobileMenuOpen ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
        <Text
          size={isMobile ? "md" : "lg"}
          fw={700}
          c={navStyles.textColor}
          component={Link}
          to="/projects"
          td="none"
          style={{
            cursor: "pointer",
            whiteSpace: "nowrap",
            pointerEvents: hideTopBarOnMobileMenuOpen ? "none" : "auto",
            textShadow: "0 1px 4px rgba(0, 0, 0, 0.35)",
          }}
        >
          Jose Avila
        </Text>

        <Burger
          opened={opened}
          onClick={toggle}
          size="md"
          lineSize={2}
          color={navStyles.textColor}
          aria-label={opened ? "Close menu" : "Open menu"}
          style={{
            pointerEvents: opened ? "none" : "auto",
            opacity: opened ? 0 : 1,
            transition: "opacity 0.15s ease",
          }}
        />
      </Box>

      {opened && (
        <>
          <Box
            onClick={toggle}
            pos="fixed"
            inset={0}
            bg="rgba(0, 0, 0, 0.35)"
            style={{ zIndex: 1201 }}
          />
          <Box
            pos="fixed"
            top={0}
            right={0}
            h="100vh"
            w={isMobile ? "84vw" : "360px"}
            maw="360px"
            p="1.25rem"
            bg={navStyles.backgroundColor}
            bd={`1px solid ${navStyles.backgroundColor === "white" ? "#ddd" : "#444"}`}
            style={{
              borderTop: "none",
              borderRight: "none",
              borderBottom: "none",
              zIndex: 1202,
              boxShadow: "-8px 0 20px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Group justify="space-between" mb="lg">
              <Text fw={700} style={{ color: navStyles.textColor }}>
                {t("navigation.menu")}
              </Text>
              <Box
                component="button"
                onClick={toggle}
                aria-label="Close menu"
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  padding: 0,
                  color: navStyles.textColor,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconX size={22} />
              </Box>
            </Group>
            {menuPanelContent}
          </Box>
        </>
      )}
    </>
  );
};

export default Navigation;
