import React, { useState } from 'react';
import { 
  Container, 
  Text, 
  Grid, 
  TextInput, 
  Textarea, 
  Button, 
  Group, 
  Stack,
  Anchor
} from '@mantine/core';
import { 
  IconMail, 
  IconPhone, 
  IconBrandInstagram
} from '@tabler/icons-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [anonymousMessage, setAnonymousMessage] = useState<string>('');

  const handleContactFormChange = (field: keyof ContactFormData, value: string): void => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const handleAnonymousSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Anonymous message submitted:', anonymousMessage);
    setAnonymousMessage('');
  };

  return (
    <div style={{ 
      backgroundColor: '#4B0082', 
      minHeight: '100vh',
      padding: '2rem 0',
      marginTop: '-60px',
      paddingTop: '80px'
    }}>
      <Container size="lg">
        <Stack gap="xl">
          {/* Contact Form Section */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form onSubmit={handleContactSubmit}>
              <Stack gap="md">
                <Grid>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Text size="sm" c="#9370DB" mb="xs">
                      tu nombre
                    </Text>
                    <TextInput
                      placeholder=""
                      value={contactForm.name}
                      onChange={(e) => handleContactFormChange('name', e.target.value)}
                      styles={{
                        input: {
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          border: 'none'
                        }
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Text size="sm" c="#9370DB" mb="xs">
                      teléfono
                    </Text>
                    <TextInput
                      placeholder=""
                      value={contactForm.phone}
                      onChange={(e) => handleContactFormChange('phone', e.target.value)}
                      styles={{
                        input: {
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          border: 'none'
                        }
                      }}
                    />
                  </Grid.Col>
                </Grid>

                <Grid>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Text size="sm" c="#9370DB" mb="xs">
                      correo electrónico
                    </Text>
                    <TextInput
                      placeholder=""
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => handleContactFormChange('email', e.target.value)}
                      styles={{
                        input: {
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          border: 'none'
                        }
                      }}
                    />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Text size="sm" c="#9370DB" mb="xs">
                      empresa
                    </Text>
                    <TextInput
                      placeholder=""
                      value={contactForm.company}
                      onChange={(e) => handleContactFormChange('company', e.target.value)}
                      styles={{
                        input: {
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          border: 'none'
                        }
                      }}
                    />
                  </Grid.Col>
                </Grid>

                <div>
                  <Text size="sm" c="#9370DB" mb="xs">
                    mensaje
                  </Text>
                  <Textarea
                    placeholder=""
                    minRows={6}
                    value={contactForm.message}
                    onChange={(e) => handleContactFormChange('message', e.target.value)}
                    styles={{
                      input: {
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        border: 'none'
                      }
                    }}
                  />
                </div>

                <Group justify="flex-end">
                  <Button
                    type="submit"
                    size="md"
                    style={{
                      backgroundColor: '#4B0082',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  >
                    Enviar
                  </Button>
                </Group>
              </Stack>
            </form>
          </div>

          {/* Anonymous Message Section */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <form onSubmit={handleAnonymousSubmit}>
              <Stack gap="md">
                <div>
                  <Text size="sm" c="#9370DB" mb="xs">
                    mensaje anónimo:
                  </Text>
                  <Textarea
                    placeholder=""
                    minRows={6}
                    value={anonymousMessage}
                    onChange={(e) => setAnonymousMessage(e.target.value)}
                    styles={{
                      input: {
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        border: 'none'
                      }
                    }}
                  />
                </div>

                <Group justify="flex-end">
                  <Button
                    type="submit"
                    size="md"
                    style={{
                      backgroundColor: '#4B0082',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  >
                    Enviar
                  </Button>
                </Group>
              </Stack>
            </form>
          </div>

          {/* Contact Information Footer */}
          <div style={{ 
            position: 'fixed', 
            bottom: '2rem', 
            left: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
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
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default Contact;
