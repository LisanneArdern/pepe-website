import React from 'react';
import { Container, Title, Text, Grid, Card, Progress, Group, Stack, Box, SimpleGrid } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { IconBike, IconChefHat, IconAtom, IconHeadphones, IconCamera, IconSettings } from '@tabler/icons-react';

interface Skill {
  name: string;
  value: number;
}

interface Interest {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
}

const Biography: React.FC = () => {
  const { t } = useTranslation();

  const skills: Skill[] = [
    { name: "Creativity", value: 85 },
    { name: "Autodidact", value: 90 },
    { name: "Leadership", value: 75 },
    { name: "Teamwork", value: 88 },
    { name: "Work under pressure", value: 82 }
  ];

  const interests: Interest[] = [
    { name: "Cycling", icon: IconBike },
    { name: "Food", icon: IconChefHat },
    { name: "Materials", icon: IconAtom },
    { name: "Music", icon: IconHeadphones },
    { name: "Photography", icon: IconCamera },
    { name: "Industrial Process", icon: IconSettings }
  ];

  return (
    <div style={{ 
      backgroundColor: 'white', 
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <Container size="lg" py="xl">
        <Grid>
        {/* Main Biography Section */}
        <Grid.Col span={{ base: 12, lg: 8 }}>
          <Grid>
            {/* Left Column - Text Content */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="md">
                <Text size="lg" style={{ lineHeight: 1.6 }}>
                  <Text component="span" size="4rem" fw={700} c="blue" style={{ float: 'left', lineHeight: 1, marginRight: '8px', marginTop: '4px' }}>
                    N
                  </Text>
                  {t('biography.biographyText.paragraph1')}
                </Text>
                
                <Text size="lg" style={{ lineHeight: 1.6 }}>
                  {t('biography.biographyText.paragraph2')}
                </Text>

                <Text size="lg" style={{ lineHeight: 1.6 }}>
                  {t('biography.biographyText.paragraph3')}
                </Text>
              </Stack>
            </Grid.Col>

            {/* Right Column - Portrait Image Placeholder */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box
                style={{
                  height: '400px',
                  backgroundColor: '#f8f9fa',
                  border: '2px dashed #dee2e6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px'
                }}
              >
                <Text c="dimmed" size="lg">
                  Portrait Image Placeholder
                </Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Grid.Col>

        {/* Right Sidebar - Skills and Interests */}
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Stack gap="xl">
            {/* Skills Section */}
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3} mb="md">
                {t('biography.skills')}
              </Title>
              <Stack gap="md">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <Group justify="space-between" mb="xs">
                      <Text size="sm" fw={500}>{skill.name}</Text>
                      <Text size="sm" c="dimmed">{skill.value}%</Text>
                    </Group>
                    <Progress value={skill.value} size="sm" radius="xl" />
                  </div>
                ))}
              </Stack>
            </Card>

            {/* Interests Section */}
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3} mb="md">
                {t('biography.interests')}
              </Title>
              <SimpleGrid cols={2} spacing="md">
                {interests.map((interest) => (
                  <Box
                    key={interest.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '16px',
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      backgroundColor: '#f8f9fa'
                    }}
                  >
                    <interest.icon size={24} color="#6c757d" />
                    <Text size="sm" ta="center" fw={500}>
                      {interest.name}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Card>
          </Stack>
        </Grid.Col>
      </Grid>

      {/* Bottom Image Placeholder */}
      <Box mt="xl">
        <Box
          style={{
            height: '300px',
            backgroundColor: '#f8f9fa',
            border: '2px dashed #dee2e6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px'
          }}
        >
          <Text c="dimmed" size="lg">
            Bottom Image Placeholder
          </Text>
        </Box>
      </Box>
      </Container>
    </div>
  );
};

export default Biography;
