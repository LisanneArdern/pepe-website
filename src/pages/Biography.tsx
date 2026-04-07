import React from "react";
import {
  Container,
  Title,
  Text,
  Grid,
  Card,
  Progress,
  Group,
  Stack,
  Box,
  SimpleGrid,
  Image,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  IconBike,
  IconChefHat,
  IconAtom,
  IconHeadphones,
  IconCamera,
  IconSettings,
} from "@tabler/icons-react";
import biographyImage from "../assets/images/biography/biography.jpg";
import biographySecondImage from "../assets/images/biography/biography-2.jpg";

interface Skill {
  nameKey: string;
  value: number;
}

interface Interest {
  nameKey: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
}

const Biography: React.FC = () => {
  const { t } = useTranslation();

  const skills: Skill[] = [
    { nameKey: "biography.skillItems.creativity", value: 85 },
    { nameKey: "biography.skillItems.autodidact", value: 90 },
    { nameKey: "biography.skillItems.leadership", value: 75 },
    { nameKey: "biography.skillItems.teamwork", value: 88 },
    { nameKey: "biography.skillItems.workUnderPressure", value: 82 },
  ];

  const interests: Interest[] = [
    { nameKey: "biography.interestItems.cycling", icon: IconBike },
    { nameKey: "biography.interestItems.food", icon: IconChefHat },
    { nameKey: "biography.interestItems.materials", icon: IconAtom },
    { nameKey: "biography.interestItems.music", icon: IconHeadphones },
    { nameKey: "biography.interestItems.photography", icon: IconCamera },
    { nameKey: "biography.interestItems.industrialProcess", icon: IconSettings },
  ];

  return (
    <Box bg="white" mih="100vh" w="100%" p="2rem 0" pt="calc(2rem + 60px)">
      <Container size="lg" py="xl">
        <Grid>
          {/* Main Biography Section */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Grid>
              {/* Left Column - Text Content */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="md">
                  <Text size="lg" lh={1.6}>
                    {t("biography.biographyText.paragraph1")}
                  </Text>

                  <Text size="lg" lh={1.6}>
                    {t("biography.biographyText.paragraph2")}
                  </Text>

                  <Text size="lg" lh={1.6}>
                    {t("biography.biographyText.paragraph3")}
                  </Text>
                </Stack>
              </Grid.Col>

              {/* Right Column - Portrait Image */}
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Image
                  src={biographyImage}
                  alt="Biography portrait"
                  h={400}
                  fit="cover"
                  radius="md"
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>

          {/* Right Sidebar - Skills and Interests */}
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack gap="xl">
              {/* Skills Section */}
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={3} mb="md">
                  {t("biography.skills")}
                </Title>
                <Stack gap="md">
                  {skills.map((skill) => (
                    <Box key={skill.nameKey}>
                      <Group justify="space-between" mb="xs">
                        <Text size="sm" fw={500}>
                          {t(skill.nameKey)}
                        </Text>
                        <Text size="sm" c="dimmed">
                          {skill.value}%
                        </Text>
                      </Group>
                      <Progress value={skill.value} size="sm" radius="xl" />
                    </Box>
                  ))}
                </Stack>
              </Card>

              {/* Interests Section */}
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={3} mb="md">
                  {t("biography.interests")}
                </Title>
                <SimpleGrid cols={2} spacing="md">
                  {interests.map((interest) => (
                    <Box
                      key={interest.nameKey}
                      display="flex"
                      style={{ flexDirection: "column", alignItems: "center", gap: "8px" }}
                      p="16px"
                      bd="1px solid #e9ecef"
                      bdrs="8px"
                      bg="#f8f9fa"
                    >
                      <interest.icon size={24} color="#6c757d" />
                      <Text size="sm" ta="center" fw={500}>
                        {t(interest.nameKey)}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Bottom Image */}
        <Box mt="xl">
          <Image
            src={biographySecondImage}
            alt="Biography secondary"
            h={300}
            fit="cover"
            radius="md"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Biography;
