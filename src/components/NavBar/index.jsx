import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  // useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const navLinks = [
  "Home",
  "Introduction",
  "Recent Winner's",
  "About Us",
  "Give Away",
  "FAQ's",
  ,
  "Contact Us",
];

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  // const theme = useTheme();
  const isLessThan1050px = useMediaQuery("(max-width:1150px)");
  const handleDrawerToggle = () => {
    setDrawer(!drawer);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#282b30", px: 2, py: 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
         

          <Box
            component="img"
            src="/logo_single.png"
            alt="Logo"
            sx={{
              width: { xs: 60, sm: 70 },
              height: "auto",
              borderRadius: 2,
              ml: {sm:1,md:3},
            }}
          />

        {isLessThan1050px && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}

          {!isLessThan1050px && (
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  color="inherit"
                  sx={{
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "scale(1.1)", color: "#ff9800" },
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                >
                  {link}
                </Button>
              ))}
              <Button
                sx={{
                  px: 3,
                  textTransform: "none",
                  fontSize: "16px",
                  border: "1px solid gray",
                  color: "white",
                }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                sx={{
                  px: 2,
                  textTransform: "none",
                  fontSize: "16px",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawer} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem key={link} disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemText primary={link} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
