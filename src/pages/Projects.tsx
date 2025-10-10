import React from "react";
import { Container, Grid, Box, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      title: "Columpio",
      category: "Mobiliario",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Felipe",
      category: "Mobiliario",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Cuencos de México 2da. Temporada",
      category: "Cerámica, Producto",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Tesis: Diseño y Violencia",
      category: "Editorial",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Viaje al Mediterráneo",
      category: "Dirección de Arte, Producto",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Suljaa'",
      category: "Mobiliario",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    },
    {
      id: 7,
      title: "Segundo Aire",
      category: "Producto",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    },
    {
      id: 8,
      title: "Altos: Licuadora de cocktail",
      category: "Producto",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop",
    },
    {
      id: 9,
      title: "Docencia",
      category: "Docencia",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
    {
      id: 10,
      title: "SAD: Sindicato de Artistas y Diseñadores",
      category: "Editorial",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    },
    {
      id: 11,
      title: "Avión de papel",
      category: "Producto",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    },
    {
      id: 12,
      title: "Frontera",
      category: "Cerámica, Producto",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#2c2c2c",
        minHeight: "100vh",
        padding: "2rem 0",
      }}
    >
      <Container size="xl" py="xl">
        <Grid>
          {projects.map((project) => (
            <Grid.Col key={project.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
              <Box
                style={{
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box
                  style={{
                    height: "300px",
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e9ecef",
                    borderRadius: "4px",
                    marginBottom: "1rem",
                  }}
                />

                <Box>
                  <Text size="lg" fw={500} mb="xs" style={{ color: "white" }}>
                    {project.title}
                  </Text>
                  <Text size="sm" style={{ color: "#999" }}>
                    {project.category}
                  </Text>
                </Box>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
