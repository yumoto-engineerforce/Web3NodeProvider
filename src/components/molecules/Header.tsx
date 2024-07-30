import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountInfo from '../atoms/AccountInfo';

interface HeaderProps {
  darkMode: boolean;
  onThemeChange: () => void;
  onDrawerToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, onThemeChange, onDrawerToggle }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Switch checked={darkMode} onChange={onThemeChange} />
        <AccountInfo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
