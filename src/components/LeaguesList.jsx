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
import useProps from "../hooks/useProps";
import { YouTubeLink } from "./YouTubeLink";

export default function LeaguesList() {
  const { user } = useAuthContext();
  const {
    setShowClubList,
    fetchEnglishData,
    fetchSpainData,
    fetchSpain2Data,
    fetchGermanyData,
    fetchEkstraklasaData,
    fetch2BundesligaData,
    fetch3BundesligaData,
    fetch1LigaData,
    fetchSerieAData,
    fetchChampionshipData,
    fetchLigueOneData,
    fetch2LigaData,
    fetchSwitzerlandData,
    fetchSerieBData,
    fetchCroatiaData,
    fetchSaudiData,
    fetchMLSData,
    fetchCzechData,
    fetchEredivisieData,
    fetchPortugalData,
    fetchLeagueOneData,
    fetchNorwegianData,
    fetchTurkishData,
    fetchABundesligaData,
    fetchLeagueTwoData,
    language,
  } = useProps();
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
              <Subheader
                text={language ? "Login" : "Zaloguj się"}
                to="/login"
              />
              <Subheader
                text={language ? "Register" : "Zarejestruj się"}
                to="/register"
              />
            </>
          )}
          <CoutryOnHomePageList
            src="Anglia.png"
            text={language ? "England" : "Anglia"}
          />
          <LeagueOnHomePageList
            primary="Premier League"
            onClick={fetchEnglishData}
          />
          <LeagueOnHomePageList
            primary="Championship"
            onClick={fetchChampionshipData}
          />
          <LeagueOnHomePageList
            primary="League One"
            onClick={fetchLeagueOneData}
          />
          <LeagueOnHomePageList
            primary="League Two"
            onClick={fetchLeagueTwoData}
          />
          <CoutryOnHomePageList
            src="Spain.png"
            text={language ? "Spain" : "Hiszpania"}
          />
          <LeagueOnHomePageList primary="La Liga" onClick={fetchSpainData} />
          <LeagueOnHomePageList
            primary="Segunda Division"
            onClick={fetchSpain2Data}
          />
          <CoutryOnHomePageList
            src="Germany.png"
            text={language ? "Germany" : "Niemcy"}
          />
          <LeagueOnHomePageList
            primary="Bundesliga"
            onClick={fetchGermanyData}
          />
          <LeagueOnHomePageList
            primary="2. Bundesliga"
            onClick={fetch2BundesligaData}
          />
          <LeagueOnHomePageList
            primary="3. Liga"
            onClick={fetch3BundesligaData}
          />
          <CoutryOnHomePageList
            src="Poland.png"
            text={language ? "Poland" : "Polska"}
          />
          <LeagueOnHomePageList
            primary="PKO Ekstraklasa"
            onClick={fetchEkstraklasaData}
          />
          <LeagueOnHomePageList primary="1. liga" onClick={fetch1LigaData} />
          <LeagueOnHomePageList primary="2. liga" onClick={fetch2LigaData} />
          <CoutryOnHomePageList
            src="Italy.png"
            text={language ? "Italy" : "Włochy"}
          />
          <LeagueOnHomePageList primary="Serie A" onClick={fetchSerieAData} />
          <LeagueOnHomePageList primary="Serie B" onClick={fetchSerieBData} />
          <CoutryOnHomePageList
            src="France.png"
            text={language ? "France" : "Francja"}
          />
          <LeagueOnHomePageList primary="Ligue 1" onClick={fetchLigueOneData} />
          <CoutryOnHomePageList
            src="Switzerland.png"
            text={language ? "Switzerland" : "Szwajcaria"}
          />
          <LeagueOnHomePageList
            primary="Super League"
            onClick={fetchSwitzerlandData}
          />
          <CoutryOnHomePageList
            src="Croatia.png"
            text={language ? "Croatia" : "Chorwacja"}
          />
          <LeagueOnHomePageList primary="1. HNL" onClick={fetchCroatiaData} />
          <CoutryOnHomePageList
            src="SaudiArabia.png"
            text={language ? "Saudi Arabia" : "Arabia Saudyjska"}
          />
          <LeagueOnHomePageList
            primary="Saudi League"
            onClick={fetchSaudiData}
          />
          <CoutryOnHomePageList src="USA.png" text="USA" />
          <LeagueOnHomePageList primary="MLS" onClick={fetchMLSData} />
          <CoutryOnHomePageList
            src="Czech.webp"
            text={language ? "Czechia" : "Czechy"}
          />
          <LeagueOnHomePageList
            primary="Czech League"
            onClick={fetchCzechData}
          />
          <CoutryOnHomePageList
            src="Netherlands.png"
            text={language ? "Netherlands" : "Holandia"}
          />
          <LeagueOnHomePageList
            primary="Eredivisie"
            onClick={fetchEredivisieData}
          />
          <CoutryOnHomePageList
            src="Portugal.png"
            text={language ? "Portugal" : "Portugalia"}
          />
          <LeagueOnHomePageList
            primary="Primeira Liga"
            onClick={fetchPortugalData}
          />
          <CoutryOnHomePageList
            src="Norway.png"
            text={language ? "Norway" : "Norwegia"}
          />
          <LeagueOnHomePageList
            primary="Eliterserien"
            onClick={fetchNorwegianData}
          />
          <CoutryOnHomePageList src="Austria.png" text="Austria" />
          <LeagueOnHomePageList
            primary="AF Bundesliga"
            onClick={fetchABundesligaData}
          />
          <CoutryOnHomePageList
            src="Turkey.avif"
            text={language ? "Turkey" : "Turcja"}
          />
          <LeagueOnHomePageList
            primary="Süper Lig"
            onClick={fetchTurkishData}
          />
          <YouTubeLink />
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
                  {language ? "Logout" : "Wyloguj"}
                </Box>
              </Link>
            </ListSubheader>
          )}
        </ul>
      </li>
    </List>
  );
}
