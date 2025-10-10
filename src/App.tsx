import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MantineProvider, AppShell, Text, Group, Button, Burger } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { IconHome, IconUser, IconBriefcase, IconMail, IconLanguage } from '@tabler/icons-react';
import Projects from './pages/Projects';
import Biography from './pages/Biography';
import Contact from './pages/Contact';
import './App.css';
import './i18n';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { t, i18n } = useTranslation();

  const navItems = [
    { label: t('navigation.home'), path: '/', icon: IconHome },
    { label: t('navigation.biography'), path: '/biography', icon: IconUser },
    { label: t('navigation.projects'), path: '/projects', icon: IconBriefcase },
    { label: t('navigation.contact'), path: '/contact', icon: IconMail },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navContent = (
    <Group gap="sm">
      {navItems.map((item) => (
        <Button
          key={item.path}
          component={Link}
          to={item.path}
          variant={location.pathname === item.path ? 'filled' : 'subtle'}
          leftSection={<item.icon size={16} />}
          size="sm"
        >
          {item.label}
        </Button>
      ))}
      <Button
        variant="subtle"
        leftSection={<IconLanguage size={16} />}
        size="sm"
        onClick={toggleLanguage}
      >
        {i18n.language === 'en' ? 'ESP' : 'EN'}
      </Button>
    </Group>
  );

  return (
    <AppShell.Header>
      <Group h="100%" justify="space-between" px="md">
        <Text size="lg" fw={700} c="blue">
          Pepe Website
        </Text>
        
        {isMobile ? (
          <Group gap="sm">
            <Button
              variant="subtle"
              size="sm"
              onClick={toggleLanguage}
            >
              {i18n.language === 'en' ? 'ESP' : 'EN'}
            </Button>
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Group>
        ) : (
          navContent
        )}
      </Group>
    </AppShell.Header>
  );
};

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <Text size="3rem" fw={700} mb="md">
        {t('home.title')}
      </Text>
      <Text size="lg" c="dimmed" mb="xl" maw={600}>
        {t('home.subtitle')}
      </Text>
      <Group gap="md">
        <Button component={Link} to="/projects" size="lg">
          {t('home.viewProjects')}
        </Button>
        <Button component={Link} to="/contact" variant="outline" size="lg">
          {t('home.getInTouch')}
        </Button>
      </Group>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <AppShell
          header={{ height: 60 }}
          padding="md"
        >
          <Navigation />
          
          <AppShell.Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </Router>
    </MantineProvider>
  );
};

export default App;
