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
import { MenuLeaguePosition } from "./MenuLeaguePosition";

export default function FootballBar({
  fetchEnglishData,
  fetchSpainData,
  fetchSpain2Data,
  fetchGermanyData,
  fetchEkstraklasaData,
  fetch2BundesligaData,
  fetch1LigaData,
  fetchSerieAData,
  fetchChampionshipData,
  setShowClubList,
  fetchLigueOneData,
  fetch2LigaData,
  fetchSwitzerlandData,
  fetchSerieBData,
  matchesData,
  playerData,
  homePageFootballBar,
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

  const leaguesListWithFuncs = [
    { leagueName: "Premier League", func: fetchEnglishData },
    { leagueName: "Championship", func: fetchChampionshipData },
    { leagueName: "La Liga", func: fetchSpainData },
    { leagueName: "Segunda Division", func: fetchSpain2Data },
    { leagueName: "Bundesliga", func: fetchGermanyData },
    { leagueName: "2. Bundesliga", func: fetch2BundesligaData },
    { leagueName: "PKO Ekstraklasa", func: fetchEkstraklasaData },
    { leagueName: "1. Liga", func: fetch1LigaData },
    { leagueName: "2. Liga", func: fetch2LigaData },
    { leagueName: "Serie A", func: fetchSerieAData },
    { leagueName: "Serie B", func: fetchSerieBData },
    { leagueName: "Ligue 1", func: fetchLigueOneData },
    { leagueName: "Super League", func: fetchSwitzerlandData },
  ];

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
              display: { xs: "flex", sm: "none", md: "none" },
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
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{ bgcolor: "black" }}
                >
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
                  {!user ? (
                    <>
                      <MenuItem
                        onClick={() => {
                          window.location.replace("/login");
                          handleCloseNavMenu();
                        }}
                      >
                        <Typography textAlign="center">Login</Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          window.location.replace("/register");
                          handleCloseNavMenu();
                        }}
                      >
                        <Typography textAlign="center">Register</Typography>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem
                        onClick={() => {
                          logout();
                          window.location.reload();
                          handleCloseNavMenu();
                        }}
                      >
                        <Typography textAlign="center">
                          Logout {user.email}
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setShowClubList(false);
                          handleCloseNavMenu();
                        }}
                      >
                        <Typography textAlign="center">User's panel</Typography>
                      </MenuItem>
                    </>
                  )}
                  {homePageFootballBar &&
                    leaguesListWithFuncs.map((league, i) => (
                      <MenuLeaguePosition
                        key={i}
                        func={league.func}
                        leagueName={league.leagueName}
                        handleCloseNavMenu={handleCloseNavMenu}
                      />
                    ))}
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
              display: { xs: "none", sm: "flex", md: "flex" },
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
                    Log out || {user && user.email}
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
