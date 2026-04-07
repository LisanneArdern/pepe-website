import React from "react";
import { Container, Title, Text, Button, Stack, Box } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectPlaceholder: React.FC = () => {
  const { projectId } = useParams();
  const { t } = useTranslation();

  return (
    <Box mih="100vh" w="100%" bg="#151515" c="white" pt="calc(2rem + 60px)">
      <Container size="md">
        <Stack gap="md">
          <Title order={1}>{t("projects.placeholder.title")}</Title>
          <Text c="#c4c4c4">
            {t("projects.placeholder.forProject")} <strong>{projectId}</strong>
          </Text>
          <Text c="#c4c4c4">
            {t("projects.placeholder.description")}
          </Text>
          <Box>
            <Button component={Link} to="/projects" variant="outline" color="gray">
              {t("projects.placeholder.backButton")}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProjectPlaceholder;
