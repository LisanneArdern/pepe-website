import React, { useState } from "react";
import {
  Container,
  Text,
  Grid,
  TextInput,
  Textarea,
  Button,
  Group,
  Stack,
  Anchor,
  Box,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconMail, IconPhone, IconBrandInstagram } from "@tabler/icons-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const INITIAL_CONTACT_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const fieldInputStyles = {
  input: {
    backgroundColor: "white",
    borderRadius: "8px",
    border: "none",
  },
};

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const [contactForm, setContactForm] =
    useState<ContactFormData>(INITIAL_CONTACT_FORM);
  const [anonymousMessage, setAnonymousMessage] = useState<string>("");

  const handleContactFormChange = (
    field: keyof ContactFormData,
    value: string
  ): void => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setContactForm(INITIAL_CONTACT_FORM);
  };

  const handleAnonymousSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setAnonymousMessage("");
  };

  return (
    <Box bg="#4B0082" mih="100vh" w="100%" p="2rem 0" pt="calc(2rem + 60px)">
      <Container size="lg">
        <Stack gap="xl">
          <Box maw="800px" mx="auto">
            <Box component="form" onSubmit={handleContactSubmit}>
              <Stack gap="md">
                <Grid>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Text size="sm" c="#9370DB" mb="xs">
                      {t("contact.form.name")}
                    </Text>
                    <TextInput
                      value={contactForm.name}
                      onChange={(e) =>
                        handleContactFormChange("name", e.target.value)
                      }
                      styles={fieldInputStyles}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Text size="sm" c="#9370DB" mb="xs">
                      {t("contact.form.phone")}
                    </Text>
                    <TextInput
                      value={contactForm.phone}
                      onChange={(e) =>
                        handleContactFormChange("phone", e.target.value)
                      }
                      styles={fieldInputStyles}
                    />
                  </Grid.Col>
                </Grid>

                <Grid>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Text size="sm" c="#9370DB" mb="xs">
                      {t("contact.form.email")}
                    </Text>
                    <TextInput
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        handleContactFormChange("email", e.target.value)
                      }
                      styles={fieldInputStyles}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Text size="sm" c="#9370DB" mb="xs">
                      {t("contact.form.company")}
                    </Text>
                    <TextInput
                      value={contactForm.company}
                      onChange={(e) =>
                        handleContactFormChange("company", e.target.value)
                      }
                      styles={fieldInputStyles}
                    />
                  </Grid.Col>
                </Grid>

                <Box>
                  <Text size="sm" c="#9370DB" mb="xs">
                    {t("contact.form.message")}
                  </Text>
                  <Textarea
                    minRows={6}
                    value={contactForm.message}
                    onChange={(e) =>
                      handleContactFormChange("message", e.target.value)
                    }
                    styles={fieldInputStyles}
                  />
                </Box>

                <Group justify="flex-end">
                  <Button type="submit" size="md" bg="#4B0082" radius="8px" c="white">
                    {t("contact.form.send")}
                  </Button>
                </Group>
              </Stack>
            </Box>
          </Box>

          <Box maw="800px" mx="auto">
            <Box component="form" onSubmit={handleAnonymousSubmit}>
              <Stack gap="md">
                <Box>
                  <Text size="sm" c="#9370DB" mb="xs">
                    {t("contact.form.anonymousMessage")}
                  </Text>
                  <Textarea
                    minRows={6}
                    value={anonymousMessage}
                    onChange={(e) => setAnonymousMessage(e.target.value)}
                    styles={fieldInputStyles}
                  />
                </Box>

                <Group justify="flex-end">
                  <Button type="submit" size="md" bg="#4B0082" radius="8px" c="white">
                    {t("contact.form.send")}
                  </Button>
                </Group>
              </Stack>
            </Box>
          </Box>

          <Box
            pos="fixed"
            bottom="2rem"
            left="2rem"
            display="flex"
            style={{ flexDirection: "column" }}
            gap="0.5rem"
          >
            <Group gap="sm">
              <IconMail size={16} color="#9370DB" />
              <Anchor href="mailto:chalan@joseaviladesign.com" c="#9370DB" size="sm">
                chalan@joseaviladesign.com
              </Anchor>
            </Group>

            <Group gap="sm">
              <IconPhone size={16} color="#9370DB" />
              <Anchor href="tel:+4915252098704" c="#9370DB" size="sm">
                +49 1525 2098704
              </Anchor>
            </Group>

            <Group gap="sm">
              <IconBrandInstagram size={16} color="#9370DB" />
              <Anchor href="https://instagram.com/zep666" c="#9370DB" size="sm" target="_blank">
                zep666
              </Anchor>
            </Group>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
