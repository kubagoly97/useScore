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
import { CountrySectionOnLeagueList } from "./CountrySectionOnLeagueList";

export default function LeaguesList() {
  const { user } = useAuthContext();
  const { setShowClubList, fetchTurkishData, language, fetchData } = useProps();

  const { logout } = useLogout();

  const everyLeagues = [
    {
      leagues: [
        { leagueName: "Premier League", leagueId: 152 },
        { leagueName: "Championship", leagueId: 153 },
        { leagueName: "League One", leagueId: 154 },
        { leagueName: "League Two", leagueId: 145 },
      ],
      countryBadge: "Anglia.png",
      englishCountryName: "England",
      polishCountryName: "Anglia",
    },
    {
      leagues: [
        { leagueName: "La Liga", leagueId: 302 },
        { leagueName: "Segunda Division", leagueId: 301 },
      ],
      countryBadge: "Spain.png",
      englishCountryName: "Spain",
      polishCountryName: "Hiszpania",
    },
    {
      leagues: [
        { leagueName: "Bundesliga", leagueId: 175 },
        { leagueName: "2. Bundesliga", leagueId: 171 },
        { leagueName: "3. Liga", leagueId: 176 },
      ],
      countryBadge: "Germany.png",
      englishCountryName: "Germany",
      polishCountryName: "Niemcy",
    },
    {
      leagues: [
        { leagueName: "PKO Ekstraklasa", leagueId: 259 },
        { leagueName: "Fortuna 1. liga", leagueId: 263 },
        { leagueName: "2. liga", leagueId: 261 },
      ],
      countryBadge: "Poland.png",
      englishCountryName: "Poland",
      polishCountryName: "Polska",
    },
    {
      leagues: [
        { leagueName: "Serie A", leagueId: 207 },
        { leagueName: "Serie B", leagueId: 206 },
      ],
      countryBadge: "Italy.png",
      englishCountryName: "Italy",
      polishCountryName: "Włochy",
    },
    {
      leagues: [
        { leagueName: "Ligue 1", leagueId: 168 },
        { leagueName: "Ligue 2", leagueId: 164 },
      ],
      countryBadge: "France.png",
      englishCountryName: "France",
      polishCountryName: "Francja",
    },
    {
      leagues: [
        { leagueName: "Super League", leagueId: 308 },
        { leagueName: "Challenge League", leagueId: 312 },
      ],
      countryBadge: "Switzerland.png",
      englishCountryName: "Switzerland",
      polishCountryName: "Szwajcaria",
    },
    {
      leagues: [
        { leagueName: "HNL", leagueId: 124 },
        { leagueName: "Prva NL", leagueId: 127 },
      ],
      countryBadge: "Croatia.png",
      englishCountryName: "Croatia",
      polishCountryName: "Chorwacja",
    },
    {
      leagues: [
        { leagueName: "Saudi League", leagueId: 278 },
        { leagueName: "Division 1", leagueId: 277 },
      ],
      countryBadge: "SaudiArabia.png",
      englishCountryName: "Saudi Arabia",
      polishCountryName: "Arabia Saudyjska",
    },
    {
      leagues: [{ leagueName: "MLS", leagueId: 332 }],
      countryBadge: "USA.png",
      englishCountryName: "USA",
      polishCountryName: "USA",
    },
    {
      leagues: [
        { leagueName: "FORTUNA:LIGA", leagueId: 143 },
        { leagueName: "FNL", leagueId: 133 },
      ],
      countryBadge: "Czech.webp",
      englishCountryName: "Czechia",
      polishCountryName: "Czechy",
    },
    {
      leagues: [
        { leagueName: "Eredivisie", leagueId: 244 },
        { leagueName: "Eerste Divisie", leagueId: 245 },
      ],
      countryBadge: "Netherlands.png",
      englishCountryName: "Netherlands",
      polishCountryName: "Holandia",
    },
    {
      leagues: [
        { leagueName: "Liga Portugal", leagueId: 266 },
        { leagueName: "Liga Portugal 2", leagueId: 267 },
      ],
      countryBadge: "Portugal.png",
      englishCountryName: "Portugal",
      polishCountryName: "Portugalia",
    },
    {
      leagues: [
        { leagueName: "Eliteserien", leagueId: 253 },
        { leagueName: "OBOS-ligaen", leagueId: 362 },
      ],
      countryBadge: "Norway.png",
      englishCountryName: "Norway",
      polishCountryName: "Norwegia",
    },
    {
      leagues: [
        { leagueName: "Admiral Bundesliga", leagueId: 56 },
        { leagueName: "Admiral 2. Liga", leagueId: 53 },
      ],
      countryBadge: "Austria.png",
      englishCountryName: "Austria",
      polishCountryName: "Austria",
    },
    {
      leagues: [
        { leagueName: "Süper Lig", leagueId: 322 },
        { leagueName: "1. Lig", leagueId: 319 },
      ],
      countryBadge: "Turkey.avif",
      englishCountryName: "Turkey",
      polishCountryName: "Turcja",
    },
  ];

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
          {everyLeagues.map((league, i) => (
            <CountrySectionOnLeagueList
              countryBadge={league.countryBadge}
              englishCountryName={league.englishCountryName}
              polishCountryName={league.polishCountryName}
              leagues={league.leagues}
            />
          ))}
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
