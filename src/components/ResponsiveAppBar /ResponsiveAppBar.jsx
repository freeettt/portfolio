import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { useState } from "react";
import { Link } from "react-router-dom";

const pages = [
   { "About Me": "/" },
   { "My City": "city" },
   { Future: "future" },
];

function ResponsiveAppBar() {
   const [anchorElNav, setAnchorElNav] = useState(null);
   const [anchorElUser, setAnchorElUser] = useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
   <AppBar position="static" sx={{ backgroundColor: "#ff9800" }}>
      <Container maxWidth="xl">
         <Toolbar disableGutters>
            <RocketLaunchIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
               variant="h6"
               noWrap
               component="a"
               href="#app-bar-with-responsive-menu"
               sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
               }}
            >
               MyPROJECT
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
               <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{ color: "white" }}
               >
                  <MenuIcon />
               </IconButton>
               <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                     vertical: "bottom",
                     horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                     vertical: "top",
                     horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                     display: { xs: "block", md: "none" },
                     "& .MuiPaper-root": {
                        backgroundColor: "#ffa726", // світло-оранжевий
                     },
                  }}
               >
                  {pages.map((page, i) => {
                     const [label, path] = Object.entries(page)[0];
                     return (
                        <MenuItem key={i} onClick={handleCloseNavMenu}>
                           <Link
                              to={path}
                              style={{
                                 textDecoration: "none",
                                 color: "white",
                              }}
                           >
                              <Typography sx={{ textAlign: "center" }}>
                                 {label}
                              </Typography>
                           </Link>
                        </MenuItem>
                     );
                  })}
               </Menu>
            </Box>
            <RocketLaunchIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
               variant="h5"
               noWrap
               component="a"
               href="#app-bar-with-responsive-menu"
               sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
               }}
            >
               MyPROJECT
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
               {pages.map((page, i) => {
                  const [label, path] = Object.entries(page)[0];
                  return (
                     <Button
                        key={i}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                     >
                        <Link
                           to={path}
                           style={{ textDecoration: "none", color: "white" }}
                        >
                           {label}
                        </Link>
                     </Button>
                  );
               })}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
               
                  <IconButton >
                     <Avatar
                        alt="avatar"
                        src="https://avatars.githubusercontent.com/u/162782787?u=90b2fa42853186424c4b80ca44613f8a3753fff7&v=4"
                     />
                  </IconButton>
               
               <Menu
                  sx={{
                     mt: "45px",
                     "& .MuiPaper-root": {
                        backgroundColor: "#ffe0b2", 
                     },
                  }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                     vertical: "top",
                     horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                     vertical: "top",
                     horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
               >
                
               </Menu>
            </Box>
         </Toolbar>
      </Container>
   </AppBar>
);

}
export default ResponsiveAppBar;
