import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Link } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function FootballBar({
  fetchEkstraklasaData,
  fetchEnglishData,
  fetchSpainData,
  fetchGermanyData,
  fetchSpain2Data,
  matchesData,
  playerData,
}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        borderRadius: "6px",
        background: "linear-gradient(2deg,#0D2818, #058C42 )",
        border: "2px dashed #0D2818",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <SportsSoccerIcon
            fontSize="large"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            useScore
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                justifyContent: "space-between",
                display: { xs: "block", md: "none" },
              }}
            >
              {matchesData.length || playerData.length ? (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Home Page
                    </Link>
                  </Typography>
                </MenuItem>
              ) : (
                <div>
                  <MenuItem
                    onClick={() => {
                      fetchEnglishData();
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">Premier League</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      fetchSpainData();
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">La Liga</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      fetchGermanyData();
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">Bundesliga</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      fetchEkstraklasaData();
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">Ekstraklasa</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      fetchSpain2Data();
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">Segunda Division</Typography>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
          <SportsSoccerIcon
            fontSize="large"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            useScore
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justify: "space-beetwen",
            }}
          >
            {!matchesData.length && !playerData.length && (
              <>
                {user ? (
                  <Button
                    variant="text"
                    onClick={() => {
                      logout();
                      window.location.reload();
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Log out {user && user.email}
                  </Button>
                ) : (
                  <>
                    <Link
                      to="/login"
                      sx={{ textDecoration: "none", color: "white" }}
                    >
                      <Button
                        variant="text"
                        sx={{ my: 2, color: "white", underline: "none" }}
                      >
                        Log in
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button
                        variant="text"
                        sx={{ my: 2, color: "white", underline: "none" }}
                      >
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
