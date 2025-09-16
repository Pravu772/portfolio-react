// src/components/Header.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ scrollToSection, sectionRefs, activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Scroll handler
  const handleScrollToSection = (key) => {
    if (scrollToSection && sectionRefs?.[`${key}Ref`]) {
      scrollToSection(sectionRefs[`${key}Ref`]);
      setMobileOpen(false); // close drawer on mobile
    }
  };

  const menuItems = [
    { text: 'Home', ref: 'home' },
    { text: 'About', ref: 'about' },
    { text: 'Academics', ref: 'academics' },
    { text: 'Experience', ref: 'experience' },
    { text: 'Skills', ref: 'skills' },
    { text: 'Projects', ref: 'projects' },
    { text: 'Honors', ref: 'honors' },
    { text: 'Contact', ref: 'contact' },
  ];

  const drawer = (
    <div>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleScrollToSection(item.ref)}
            sx={{
              color: activeSection === item.ref ? 'primary.main' : 'inherit',
              fontWeight: activeSection === item.ref ? 'bold' : 'normal',
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={2}
        sx={{
          backgroundColor: 'rgba(25, 25, 35, 0.95)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold' }}
          >
            {'< / P r a v i n . d e V>'}
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => handleScrollToSection(item.ref)}
                  sx={{
                    fontWeight: 'medium',
                    color:
                      activeSection === item.ref ? 'primary.main' : 'inherit',
                    borderBottom:
                      activeSection === item.ref ? '2px solid' : 'none',
                    borderColor: 'primary.main',
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Add padding to account for fixed header */}
      <Toolbar />
    </>
  );
};

export default Header;
