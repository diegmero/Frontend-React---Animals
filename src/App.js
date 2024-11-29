import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './App.css';
import ReptileCard from './components/Card';

function App() {
  const [message, setMessage] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
                  <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Box
                      component="img"
                      sx={{
                        height: 35,
                        width: 70,
                        maxHeight: { xs: 40, md: 50 },
                        maxWidth: { xs: 60, md: 100 },
                        mr: 2
                      }}
                      alt="Logo"
                      src="https://heitic.com/wp-content/uploads/2023/03/Diseno-sin-titulo-2.png"
                    />
                  </Box>
            {isMobile ? (
              <Box>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Inicio</MenuItem>
                  <MenuItem onClick={handleClose}>Acerca de</MenuItem>
                  <MenuItem onClick={handleClose}>Servicios</MenuItem>
                  <MenuItem onClick={handleClose}>Contacto</MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box>
                <Button color="inherit">Inicio</Button>
                <Button color="inherit">Acerca de</Button>
                <Button color="inherit">Servicios</Button>
                <Button color="inherit">Contacto</Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
            Bienvenido a Heitic!
        </Typography>
        <Typography variant="body1">
          {message}
        </Typography>
      </Container>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 2,
        mt: 4 // Margen superior
      }}>
        <ReptileCard />
        <ReptileCard />
        <ReptileCard />
      </Box>
      <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 2,
              mt: 4 // Margen superior
            }}>
              <ReptileCard />
              <ReptileCard />
              <ReptileCard />
            </Box>
    </div>
  );
}

export default App;