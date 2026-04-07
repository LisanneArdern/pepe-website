import React from "react";
import { Container, Box, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bikeImage from "../assets/images/projects/bike.jpg";
import holyShitImage from "../assets/images/projects/holy-shit-2.jpg";
import thermalCamaraImage from "../assets/images/projects/thermal-camara.png";
import stoolImage from "../assets/images/projects/stool.png";

interface Project {
  id: number;
  titleKey: string;
  categoryKey: string;
  image: string;
  slug: string;
}

const CARD_HEIGHTS = [520, 340, 460, 380, 560, 360];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const projectImages = [
    bikeImage,
    holyShitImage,
    thermalCamaraImage,
    stoolImage,
  ];

  const projects: Project[] = [
    {
      id: 1,
      titleKey: "projects.items.columpio.title",
      categoryKey: "projects.categories.furniture",
      image: projectImages[0],
      slug: "columpio",
    },
    {
      id: 2,
      titleKey: "projects.items.felipe.title",
      categoryKey: "projects.categories.furniture",
      image: projectImages[1],
      slug: "felipe",
    },
    {
      id: 3,
      titleKey: "projects.items.cuencosDeMexico.title",
      categoryKey: "projects.categories.ceramicsProduct",
      image: projectImages[2],
      slug: "cuencos-de-mexico-2da-temporada",
    },
    {
      id: 4,
      titleKey: "projects.items.tesisDisenoViolencia.title",
      categoryKey: "projects.categories.editorial",
      image: projectImages[3],
      slug: "tesis-diseno-y-violencia",
    },
    {
      id: 5,
      titleKey: "projects.items.viajeMediterraneo.title",
      categoryKey: "projects.categories.artDirectionProduct",
      image: projectImages[0],
      slug: "viaje-al-mediterraneo",
    },
    {
      id: 6,
      titleKey: "projects.items.suljaa.title",
      categoryKey: "projects.categories.furniture",
      image: projectImages[1],
      slug: "suljaa",
    },
    {
      id: 7,
      titleKey: "projects.items.segundoAire.title",
      categoryKey: "projects.categories.product",
      image: projectImages[2],
      slug: "segundo-aire",
    },
    {
      id: 8,
      titleKey: "projects.items.altosLicuadora.title",
      categoryKey: "projects.categories.product",
      image: projectImages[3],
      slug: "altos-licuadora-de-cocktail",
    },
    {
      id: 9,
      titleKey: "projects.items.docencia.title",
      categoryKey: "projects.categories.teaching",
      image: projectImages[0],
      slug: "docencia",
    },
    {
      id: 10,
      titleKey: "projects.items.sad.title",
      categoryKey: "projects.categories.editorial",
      image: projectImages[1],
      slug: "sad-sindicato-de-artistas-y-disenadores",
    },
    {
      id: 11,
      titleKey: "projects.items.avionDePapel.title",
      categoryKey: "projects.categories.product",
      image: projectImages[2],
      slug: "avion-de-papel",
    },
    {
      id: 12,
      titleKey: "projects.items.frontera.title",
      categoryKey: "projects.categories.ceramicsProduct",
      image: projectImages[3],
      slug: "frontera",
    },
  ];

  const [heroProject, ...gridProjects] = projects;

  return (
    <Box bg="#151515" mih="100vh" w="100%">
      <Link
        to={`/projects/${heroProject.slug}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Box
          mih={isMobile ? "80vh" : "100vh"}
          w="100%"
          display="flex"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${heroProject.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            alignItems: "flex-end",
            padding: isMobile ? "1rem" : "2.5rem",
          }}
        >
          <Box maw={isMobile ? "100%" : "42rem"}>
            <Text fw={700} style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1.05 }}>
              {t(heroProject.titleKey)}
            </Text>
            <Text c="#e6e6e6" style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)" }}>
              {t(heroProject.categoryKey)}
            </Text>
          </Box>
        </Box>
      </Link>

      <Container size="xl" py="xl">
        <Box className="projects-masonry">
          {gridProjects.map((project, index) => (
            <Box key={project.id} className="projects-masonry-item">
              <Link
                to={`/projects/${project.slug}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box
                  className="project-card"
                  pos="relative"
                  style={{ ["--card-height" as string]: `${CARD_HEIGHTS[index % CARD_HEIGHTS.length]}px` }}
                >
                  <Box
                    className="project-card-image"
                    pos="absolute"
                    inset={0}
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "transform 0.45s ease",
                    }}
                  />
                  <Box
                    className="project-card-overlay"
                    pos="absolute"
                    inset={0}
                    display="flex"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.15))",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "1.25rem",
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    <Text size="xl" fw={700}>
                      {t(project.titleKey)}
                    </Text>
                    <Text size="sm" c="#d0d0d0">
                      {t(project.categoryKey)}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
