import * as React from "react";
import List from "@mui/material/List";
import { LeagueOnHomePageList } from "./LeagueOnHomePageList";
import { CoutryOnHomePageList } from "./CoutryOnHomePageList";
import ListSubheader from "@mui/material/ListSubheader";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/system";
import { Subheader } from "./Subheader";

export default function LeaguesList({
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
  fetchCroatiaData,
}) {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100%",
        bgcolor: "black",
        position: "relative",
        overflow: "auto",
        maxHeight: 700,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      <li>
        <ul>
          {user ? (
            <>
              <ListSubheader
                sx={{
                  fontSize: "10px",
                  bgcolor: "black",
                  color: "white",
                  fontWeight: "900",
                  height: "30px",
                  paddingBottom: "40px",
                  borderBottom: "0.5px solid grey",
                  textAlign: "center",
                }}
              >
                <Link
                  onClick={() => setShowClubList(false)}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Box style={{ display: "inline-block", paddingTop: "5px" }}>
                    <HomeIcon />
                  </Box>
                </Link>
              </ListSubheader>
            </>
          ) : (
            <>
              <Subheader text="Login" to="/login" />
              <Subheader text="Register" to="/register" />
            </>
          )}
          <CoutryOnHomePageList src="Anglia.png" text="England" />
          <LeagueOnHomePageList
            primary="Premier League"
            onClick={fetchEnglishData}
          />
          <LeagueOnHomePageList
            primary="Championship"
            onClick={fetchChampionshipData}
          />
          <CoutryOnHomePageList src="Spain.png" text="Spain" />
          <LeagueOnHomePageList primary="La Liga" onClick={fetchSpainData} />
          <LeagueOnHomePageList
            primary="Segunda Division"
            onClick={fetchSpain2Data}
          />
          <CoutryOnHomePageList src="Germany.png" text="Germany" />
          <LeagueOnHomePageList
            primary="Bundesliga"
            onClick={fetchGermanyData}
          />
          <LeagueOnHomePageList
            primary="2. Bundesliga"
            onClick={fetch2BundesligaData}
          />
          <CoutryOnHomePageList src="Poland.png" text="Poland" />
          <LeagueOnHomePageList
            primary="PKO Ekstraklasa"
            onClick={fetchEkstraklasaData}
          />
          <LeagueOnHomePageList primary="1. liga" onClick={fetch1LigaData} />
          <LeagueOnHomePageList primary="2. liga" onClick={fetch2LigaData} />
          <CoutryOnHomePageList src="Italy.png" text="Italy" />
          <LeagueOnHomePageList primary="Serie A" onClick={fetchSerieAData} />
          <LeagueOnHomePageList primary="Serie B" onClick={fetchSerieBData} />
          <CoutryOnHomePageList src="France.png" text="France" />
          <LeagueOnHomePageList primary="Ligue 1" onClick={fetchLigueOneData} />
          <CoutryOnHomePageList src="Switzerland.png" text="Switzerland" />
          <LeagueOnHomePageList
            primary="Super League"
            onClick={fetchSwitzerlandData}
          />
          <CoutryOnHomePageList src="Croatia.png" text="Croatia" />
          <LeagueOnHomePageList primary="1. HNL" onClick={fetchCroatiaData} />
          {user && (
            <ListSubheader
              sx={{
                bgcolor: "black",
                textAlign: "center",
                color: "white",
                fontWeight: "900",
                height: "30px",
                paddingBottom: "45px",
                borderBottom: "0.5px solid grey",
              }}
            >
              <Link
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Box style={{ display: "inline-block", paddingTop: "5px" }}>
                  Logout
                </Box>
              </Link>
            </ListSubheader>
          )}
        </ul>
      </li>
    </List>
  );
}
