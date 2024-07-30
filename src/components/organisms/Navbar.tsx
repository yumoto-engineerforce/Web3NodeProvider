import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  onThemeChange: () => void;
  onDrawerToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, onThemeChange, onDrawerToggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.email);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

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
        <Typography variant="body1" style={{ marginRight: '1rem' }}>
          {email}
        </Typography>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
