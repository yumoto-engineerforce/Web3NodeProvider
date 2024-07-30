import React from 'react';
import { Drawer, List, ListItem, ListItemText, CssBaseline, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../molecules/Header';

const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  overflowY: 'auto',
}));

interface DashboardTemplateProps {
  darkMode: boolean;
  onThemeChange: () => void;
  onDrawerToggle: () => void;
  drawerOpen: boolean;
  children: React.ReactNode;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ darkMode, onThemeChange, onDrawerToggle, drawerOpen, children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Header darkMode={darkMode} onThemeChange={onThemeChange} onDrawerToggle={onDrawerToggle} />
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <MainContent>
        <Container>{children}</Container>
      </MainContent>
    </div>
  );
};

export default DashboardTemplate;
