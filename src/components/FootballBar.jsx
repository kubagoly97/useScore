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
import LeftDrawer from "./LeftDrawer";

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
  fetchCroatiaData,
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
            <LeftDrawer
              setShowClubList={setShowClubList}
              fetchEnglishData={fetchEnglishData}
              fetchSpainData={fetchSpainData}
              fetchSpain2Data={fetchSpain2Data}
              fetchGermanyData={fetchGermanyData}
              fetchEkstraklasaData={fetchEkstraklasaData}
              fetch2BundesligaData={fetch2BundesligaData}
              fetch1LigaData={fetch1LigaData}
              fetchSerieAData={fetchSerieAData}
              fetchChampionshipData={fetchChampionshipData}
              fetchLigueOneData={fetchLigueOneData}
              fetch2LigaData={fetch2LigaData}
              fetchSwitzerlandData={fetchSwitzerlandData}
              fetchSerieBData={fetchSerieBData}
              homePageFootballBar={homePageFootballBar}
              fetchCroatiaData={fetchCroatiaData}
            />
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
                  <></>
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
